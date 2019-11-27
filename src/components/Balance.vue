<template>
  <div class="ba">
    <span class="ba-title">Balance</span>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="ba-tabs">
      <el-tab-pane label="Deposit" name="deposit">
        <Deposit />
      </el-tab-pane>
      <el-tab-pane label="Withdraw" name="withdraw">
        <Withdraw />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Deposit from '@/components/Deposit'
import Withdraw from '@/components/Withdraw'
export default {
  components: { Deposit, Withdraw },
  data() {
    return {
      activeName: 'deposit'
    }
  },
  methods: {
    handleClick() { }
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

.ba >>> .el-tabs--border-card {
  background: var(--container-bg);
  border: none;
  box-shadow: none;
}

.ba >>> .el-tabs__header {
  background: var(--container-bg);
  box-shadow: none;
}

.ba >>> .el-tabs__item {
  color: var(--page-text-highlight);
  padding: 0 10px;
  font-size: 12px;
}

.ba >>> .el-tabs__item.is-top:nth-child(2) {
  padding-left: 10px;
}

.ba >>> .el-tabs__item:active,
.ba >>> .el-tabs__item:hover {
  color: var(--page-text-highlight);
}

.ba >>> .el-tabs__nav-wrap::after {
  background-color: var(--page-text);
  height: 1px;
}

.ba >>> .el-tabs__active-bar {
  height: 3px;
}
</style>