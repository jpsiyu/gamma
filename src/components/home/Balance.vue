<template>
  <div class="ba">
    <span class="ba-title">Balance</span>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="ba-tabs elcustom-tabs">
      <el-tab-pane label="Deposit" name="deposit">
        <Deposit :balance="balance" />
      </el-tab-pane>
      <el-tab-pane label="Withdraw" name="withdraw">
        <Withdraw :balance="balance" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Deposit from '@/components/home/Deposit'
import Withdraw from '@/components/home/Withdraw'
import { mapState } from 'vuex'
export default {
  components: { Deposit, Withdraw },
  data() {
    return {
      activeName: 'deposit',
      balance: {
        token: 0,
        tokenInDex: 0,
        eth: 0,
        ethInDex: 0,
      }
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
    })
  },
  watch: {
    account: function (val) {
      if (val)
        this.getTokenBalance()
    }
  },
  methods: {
    handleClick() { },
    getTokenBalance() {
      return Promise.all([
        this.$gamma.token.methods.balanceOf(this.account).call(),
        this.$gamma.dex.methods.tokenUserAmountOf(this.$gamma.tokenAddr(), this.account).call(),
        this.$gamma.web3.eth.getBalance(this.account),
        this.$gamma.dex.methods.tokenUserAmountOf(this.$gamma.ethAddr(), this.account).call(),
      ])
        .then(res => {
          this.balance.token = res[0]
          this.balance.tokenInDex = res[1]
          this.balance.eth = res[2]
          this.balance.ethInDex = res[3]
        })
    }
  }
}
</script>

<style scoped>
.ba {
  background: var(--container-bg);
  color: var(--page-text);
  flex: 1;
  font-size: 12px;
  padding-bottom: 50px;
  position: relative;
}

.ba-title {
  background-color: var(--container-top);
  color: var(--page-text-highlight);
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: inline-block;
  font-size: 16px;
  position: absolute;
}

.ba-tabs {
  position: absolute;
  top: 38px;
  bottom: 0;
  overflow-y: auto;
}
</style>

<style src="@/assets/elcustom.css" scoped /> 