<template>
  <el-dialog :visible.sync="visible" :append-to-body="true" class="tr" width="500px">
    <div slot="title">{{tradeInfo.title}}</div>
    <el-form class="tr-form" label-position="top" :model="form">
      <el-form-item
        label="Order"
      >1000 {{curPair.coin}}, {{tradeInfo.price}} {{curPair.coin}}/{{curPair.base}}</el-form-item>
      <el-form-item label="Amount" prop="amount">
        <el-input v-model="form.amount">
          <span slot="append">{{curPair.coin}}</span>
        </el-input>
      </el-form-item>
      <el-form-item label="ETH">
        <el-input v-model="eth" disabled>
          <span slot="append">{{curPair.base}}</span>
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="hide">Cancel</el-button>
      <el-button type="primary" @click="sure">Sure</el-button>
    </div>
    <NotifyHash ref="notifyHash" />
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'
import BigNumber from 'bignumber.js'
import NotifyHash from '@/components/popup/NotifyHash'
export default {
  components: { NotifyHash },
  data() {
    return {
      visible: false,
      order: {},
      form: {
        amount: '',
      },
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
      curPair: state => state.curPair,
    }),
    tradeInfo() {
      if (!this.order.transactionHash) return {}
      const isBuyOrder = this.order.returnValues[0] !== this.$gamma.ethAddr()
      const amIBuy = !isBuyOrder
      const title = amIBuy ? 'Buy Order' : 'Sell Order'
      let price = isBuyOrder
        ? BigNumber(this.order.returnValues[3]).dividedBy(BigNumber(this.order.returnValues[1]))
        : BigNumber(this.order.returnValues[1]).dividedBy(BigNumber(this.order.returnValues[3]))
      price = price.toFixed()

      return {
        amIBuy,
        title,
        price
      }
    },
    eth() {
      if (!this.form.amount || isNaN(this.form.amount)) return ''
      let eth = BigNumber(this.form.amount).multipliedBy(BigNumber(this.tradeInfo.price))
      return eth.toFixed()
    }
  },
  methods: {
    show(options) {
      this.order = options.order
      this.visible = true
    },
    hide() {
      this.visible = false
    },
    sure() {
      if (!this.eth) {
        return this.$message({ message: 'Illegal trade', type: 'warning' })
      }

      const amount = this.tradeInfo.amIBuy
        ? BigNumber(this.eth).multipliedBy(10 ** 18).toFixed()
        : BigNumber(this.form.amount).multipliedBy(10 ** 18).toFixed()

      this.$gamma.dex.methods.buy1(
          this.order.returnValues[0],
          this.order.returnValues[1],
          this.order.returnValues[2],
          this.order.returnValues[3],
          this.order.returnValues[4],
          this.order.returnValues[5],
          this.order.returnValues[6],
          amount
        ).send({ from: this.account})
        .on('transactionHash', hash => {
          this.$refs.notifyHash.show({ hashes: [hash] })
        })
        .on('receipt', receipt => {
          console.log('receipt', receipt)
        })
    }
  }
}
</script>