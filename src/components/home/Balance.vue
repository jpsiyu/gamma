<template>
  <div class="ba" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="ba-title">
      <span>{{$t('balance.balance')}}</span>
      <i class="ba-refresh el-icon-refresh" @click="getTokenBalance"></i>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="ba-tabs elcustom-tabs">
      <el-tab-pane :label="$t('balance.deposit')" name="deposit">
        <Deposit :balance="balance" />
      </el-tab-pane>
      <el-tab-pane :label="$t('balance.withdraw')" name="withdraw">
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
      },
      loading: false
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
      this.loading = true
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
        .finally(() => {
          this.loading = false
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
  font-size: 16px;
  position: absolute;
}

.ba-refresh {
  cursor: pointer;
  position: absolute;
  right: 10px;
}

.ba-tabs {
  position: absolute;
  top: 38px;
  bottom: 0;
  overflow-y: auto;
}
</style>

<style src="@/assets/elcustom.css" scoped /> 