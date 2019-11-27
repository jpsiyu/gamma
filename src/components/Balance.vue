<template>
  <div class="ba">
    <span>Balance</span>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
      <el-tab-pane label="Deposit" name="deposit" />
      <el-tab-pane label="Withdraw" name="withdraw" />
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'deposit'
    }
  },
  methods: {
    handleClick() {}
  }
}
</script>

<style scoped>
.ba{
  background: var(--container-bg);
  color: var(--page-text);
  margin: 5px 0;
  height: 50%;
}
</style>