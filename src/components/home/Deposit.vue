<template>
  <div class="dp">
    <div class="db-part">
      <div class="dp-balance">
        <span>Token</span>
        <span>Wallet</span>
        <span>Gamma</span>
      </div>
      <div class="dp-balance">
        <span>{{curPair.coin}}</span>
        <span>{{balance.token | unit}}</span>
        <span>{{balance.tokenInDex | unit}}</span>
      </div>
      <span class="dp-part__title">Deposit {{curPair.coin}}</span>
      <div class="dp-inline">
        <el-input v-model="amountToken" placeholder="Amount"></el-input>
        <el-button @click="depositToken">Deposit</el-button>
      </div>
    </div>
    <div class="dp-part">
      <div class="dp-balance">
        <span>Token</span>
        <span>Wallet</span>
        <span>Gamma</span>
      </div>
      <div class="dp-balance">
        <span>{{curPair.base}}</span>
        <span>{{balance.eth | unit}}</span>
        <span>{{balance.ethInDex | unit}}</span>
      </div>
      <span class="dp-part__title">Deposit {{curPair.base}}</span>
      <div class="dp-inline">
        <el-input v-model="amountEth" placeholder="Amount"></el-input>
        <el-button @click="depositEth">Deposit</el-button>
      </div>
    </div>
    <p
      class="dp-note"
    >Make sure {{curPair.coin}} is the token you actually want to trade. Multiple tokens can share the same name.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BigNumber from 'bignumber.js'
export default {
  props: ['balance'],
  data() {
    return {
      amountToken: '',
      amountEth: '',
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
      curPair: state => state.curPair,
    }),
  },
  methods: {
    depositToken() {
      if (!this.amountToken || isNaN(this.amountToken)) {
        return this.$message({ message: 'Illegal amount', type: 'warning' })
      }
      const amount = BigNumber(this.amountToken).multipliedBy(10 ** 18)
      const total = BigNumber(this.balance.token)
      if (amount > total) {
        return this.$message({ message: 'Not enough', type: 'warning' })
      }

      this.$gamma.token.methods.approve(this.$gamma.dexAddr(), amount.toFixed()).send({ from: this.account })
        .then(res => {
          console.log('approve', res)
          return this.$gamma.dex.methods.depositToken(this.$gamma.tokenAddr(), amount.toFixed()).send({ from: this.account })
        })
        .then(res => {
          console.log('deposit', res)
        })
        .catch(err => {
          console.error(err)
          this.$message({ message: err.message, type: 'error' })
        })
    },
    depositEth() { }
  }

}
</script>

<style scoped>
.dp {
  padding: 0 10px;
  overflow-y: auto;
}

.dp-part:nth-child(2) {
  margin-top: 50px;
}

.dp-part__title {
  margin: 10px 0;
  display: inline-block;
}

.dp-balance {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.dp-balance:nth-child(2) {
  border-top: 1px solid var(--page-text);
  color: var(--page-text-highlight);
}

.dp-inline {
  display: flex;
}

.dp-note {
  word-break: keep-all;
  font-size: 16px;
  margin: 30px 0;
}

.dp >>> .el-button {
  background: var(--button-bg);
  border-color: var(--button-bg);
  color: var(--page-text);
}

.dp >>> .el-input__inner {
  background: var(--page-bg);
  color: var(--page-text);
  border: none;
}
</style>