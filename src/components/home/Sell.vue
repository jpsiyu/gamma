<template>
  <div class="sell">
    <el-form :model="form" :ref="form" label-position="top">
      <el-form-item label="Amount to sell" prop="amount">
        <el-input v-model="form.amount">
          <span slot="append">{{curPair.coin}}</span>
        </el-input>
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input v-model="form.price">
          <span slot="append">{{curPair.base}}</span>
        </el-input>
      </el-form-item>
      <el-form-item label="Total">
        <el-input v-model="total" readonly></el-input>
      </el-form-item>
      <el-form-item label="Expires" prop="expires">
        <el-input v-model="form.expires">
          <span slot="append">Blocks</span>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button type="danger" class="sell-button" @click="sell">Sell Order</el-button>
    <NotifyHash ref="notifyHash" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BigNumber from 'bignumber.js'
import NotifyHash from '@/components/popup/NotifyHash'
export default {
  components: { NotifyHash },
  data() {
    return {
      form: {
        amount: '',
        price: '',
        expires: '10000',
      }
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
      curPair: state => state.curPair,
    }),
    total() {
      if (
        !this.form.amount ||
        isNaN(this.form.amount) ||
        !this.form.price ||
        isNaN(this.form.price)
      ) return ''
      return BigNumber(this.form.amount).multipliedBy(this.form.price).toFixed()
    }
  },
  methods: {
    sell() {
      if (!this.total) return

      const amountUnit = BigNumber(this.form.amount).multipliedBy(10 ** 18).toFixed()
      const totalUnit = BigNumber(this.total).multipliedBy(10 ** 18).toFixed()

      let curBlockNum = 0
      let nonce = 0

      Promise.all([
        this.$gamma.web3.eth.getBlockNumber(),
        this.$gamma.web3.eth.getTransactionCount(this.account),
      ])
        .then(res => {
          curBlockNum = Number(res[0]) + Number(this.form.expires)
          nonce = Number(res[1] + 1).toString()
          //console.log('sell', this.$gamma.tokenAddr(), amountUnit, this.$gamma.ethAddr(), totalUnit, curBlockNum, nonce)
          this.$gamma.dex.methods.sell(
            this.$gamma.ethAddr(),
            totalUnit,
            this.$gamma.tokenAddr(),
            amountUnit,
            curBlockNum,
            nonce,
          ).send({ from: this.account })
            .on('transactionHash', hash => {
              this.$refs.notifyHash.show({ hashes: [hash] })
            })
            .on('receipt', receipt => {
              console.log('receipt', receipt)
            })
        })
    }
  }
}
</script>

<style scoped>
.sell {
  padding: 0 10px;
  margin-bottom: 50px;
}

.sell-button {
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
}

.sell >>> .el-form-item__label {
  color: var(--page-text);
}

.sell >>> .el-input-group__append,
.sell >>> .el-input__inner {
  border: none;
  background-color: var(--page-bg);
  color: var(--page-text);
}
</style>