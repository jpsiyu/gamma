<template>
  <div class="wd">
    <div class="db-part">
      <div class="wd-balance">
        <span>Token</span>
        <span>Wallet</span>
        <span>Gamma</span>
      </div>
      <div class="wd-balance">
        <span>{{curPair.coin}}</span>
        <span>0.000</span>
        <span>0.000</span>
      </div>
      <span class="wd-part__title">Widthdraw {{curPair.coin}}</span>
      <div class="wd-inline">
        <el-input v-model="amountA" placeholder="Amount"></el-input>
        <el-button>Widthdraw</el-button>
      </div>
    </div>
    <div class="wd-part">
      <div class="wd-balance">
        <span>Token</span>
        <span>Wallet</span>
        <span>Gamma</span>
      </div>
      <div class="wd-balance">
        <span>{{curPair.base}}</span>
        <span>0.000</span>
        <span>0.000</span>
      </div>
      <span class="wd-part__title">Widthdraw {{curPair.base}}</span>
      <div class="wd-inline">
        <el-input v-model="amountB" placeholder="Amount"></el-input>
        <el-button>Widthdraw</el-button>
      </div>
    </div>
    <p
      class="wd-note"
    >Make sure {{curPair.coin}} is the token you actually want to trade. Multiple tokens can share the same name.</p>
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
.wd {
  padding: 0 10px;
  overflow-y: auto;
}

.wd-part:nth-child(2) {
  margin-top: 50px;
}

.wd-part__title {
  margin: 10px 0;
  display: inline-block;
}

.wd-balance {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.wd-balance:nth-child(2) {
  border-top: 1px solid var(--page-text);
  color: var(--page-text-highlight);
}

.wd-inline {
  display: flex;
}

.wd-note {
  word-break: keep-all;
  font-size: 16px;
  margin: 30px 0;
}

.wd >>> .el-button {
  background: var(--button-bg);
  border-color: var(--button-bg);
  color: var(--page-text);
  padding: 7px 6px;
}

.wd >>> .el-input__inner {
  background: var(--page-bg);
  color: var(--page-text);
  border: none;
}
</style>