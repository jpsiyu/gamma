<template>
  <div class="ba">
    <span class="ba-title">Balance</span>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Deposit" name="deposit">
        <Deposit />
      </el-tab-pane>
      <el-tab-pane label="Withdraw" name="withdraw" />
    </el-tabs>
  </div>
</template>

<script>
import Deposit from '@/components/Deposit'
export default {
  components: { Deposit },
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
  overflow-y: auto;
  padding-bottom: 50px;
}

.ba-title {
  color: var(--page-text-highlight);
  padding: 10px;
  display: inline-block;
  font-size: 16px;
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
</style>