<template>
  <div class="dp">
    <div class="db-part">
      <div class="dp-balance">
        <span>Token</span>
        <span>Wallet</span>
        <span>Gamma</span>
      </div>
      <div class="dp-balance">
        <span>{{curPair[0]}}</span>
        <span>0.000</span>
        <span>0.000</span>
      </div>
      <span class="dp-part__title">Deposit {{curPair[0]}}</span>
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
        <span>{{curPair[1]}}</span>
        <span>0.000</span>
        <span>0.000</span>
      </div>
      <span class="dp-part__title">Deposit {{curPair[1]}}</span>
      <div class="dp-inline">
        <el-input v-model="amountB" placeholder="Amount"></el-input>
        <el-button>Deposit</el-button>
      </div>
    </div>
    <p
      class="dp-note"
    >Make sure {{curPair[0]}} is the token you actually want to trade. Multiple tokens can share the same name.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      amountA: '',
      amountB: '',
    }
  },
  computed: {
    ...mapState({
      curPair: state => state.curPair,
    }),
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