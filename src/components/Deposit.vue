<template>
  <div class="dp">
    <div class="db-part">
      <div class="dp-balance">
        <span>Token</span>
        <span>Wallet</span>
        <span>Gamma</span>
      </div>
      <div class="dp-balance">
        <span>PPT</span>
        <span>0.000</span>
        <span>0.000</span>
      </div>
      <span class="dp-part__title">Deposit PPT</span>
      <div class="dp-inline">
        <el-input v-model="amountA" placeholder="Amount"></el-input>
        <el-button>Deposit</el-button>
      </div>
    </div>
    <div class="dp-part">
      <div class="dp-balance">
        <span>Token</span>
        <span>Wallet</span>
        <span>Gamma</span>
      </div>
      <div class="dp-balance">
        <span>ETH</span>
        <span>0.000</span>
        <span>0.000</span>
      </div>
      <span class="dp-part__title">Deposit ETH</span>
      <div class="dp-inline">
        <el-input v-model="amountB" placeholder="Amount"></el-input>
        <el-button>Deposit</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amountA: '',
      amountB: '',
    }
  },
}
</script>

<style scoped>
.dp {
  padding: 0 10px;
  overflow-y: auto;
}

.dp-part:last-child {
  margin-top: 20px;
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

.dp-balance:first-child {
  border-bottom: 1px solid var(--page-text);
}

.dp-inline {
  display: flex;
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