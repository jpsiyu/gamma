<template>
  <div class="nav">
    <img class="nav-logo" src="@/assets/logo.png" alt />
    <span class="nav-title">Gamma</span>
    <el-dropdown @command="handleCommand">
      <span class="nav-pair">
        {{curPair.coin}}
        <i class="nav-icon el-icon-arrow-down"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, index) in pairs" :key="index" :command="item">{{item.coin}}</el-dropdown-item>
        <el-dropdown-item command="other">Other</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <DepositToken ref="deposit" />
  </div>
</template>

<script>
import DepositToken from '@/components/popup/DepositToken'
import { mapState } from 'vuex'
export default {
  components: { DepositToken },
  computed: {
    ...mapState({
      pairs: state => state.pairs,
      curPair: state => state.curPair,
    }),
  },
  methods: {
    handleCommand(item) {
      if (item === 'other') {
        this.handleOther()
        return
      }
      const path = item.coin + '_' + item.base
      this.$router.push({ path }).catch(() => { })
    },

    handleOther() {
      this.$refs.deposit.show()
    }
  }
}
</script>

<style scoped>
.nav {
  background: var(--container-top);
  color: var(--page-text);
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.nav-logo {
  width: 20px;
  height: 20px;
}

.nav-title {
  margin-left: 10px;
}

.nav-pair {
  margin-left: 10px;
  border: 1px solid var(--page-text);
  border-radius: 20px;
  padding: 0 10px;
  cursor: pointer;
  color: var(--page-text);
}

.nav-icon {
  font-size: 12px;
  margin-left: 3px;
}
</style>