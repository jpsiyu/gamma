<template>
  <div class="ba">
    <span class="ba-title">Balance</span>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="ba-tabs custom-tab">
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
import Deposit from '@/components/home/Deposit'
import Withdraw from '@/components/home/Withdraw'
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
</style>

<style src="@/assets/el-custom.css" scoped /> 