<template>
  <div class="ob">
    <span class="ob-title">Order Book</span>
    <div class="ob-pair">
      <span>{{curPair.coin}}</span>
      <span>{{curPair.coin}}/{{curPair.basi}}</span>
      <span>{{curPair.basi}}</span>
    </div>
    <div class="ob-book">
      <div class="ob-sell">
        <div class="ob-item" v-for="(item, index) in sellList" :key="index">
          <span>{{item.amount}}</span>
          <span>{{item.price}}</span>
          <span>{{item.total}}</span>
        </div>
      </div>
      <div class="ob-buy">
        <div class="ob-item" v-for="(item, index) in buyList" :key="index">
          <span>{{item.amount}}</span>
          <span>{{item.price}}</span>
          <span>{{item.total}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      curPair: state => state.curPair,
    }),
    buyList() {
      return [
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
      ]
    },
    sellList() {
      return [
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
        { amount: 12, price: 0.4, total: 4.8 },
      ]
    }
  }
}
</script>

<style scoped>
.ob {
  background: var(--container-bg);
  color: var(--page-text);
  width: 100%;
  height: 100%;
  font-size: 12px;
  position: relative;
}

.ob-title {
  background-color: var(--container-top);
  color: var(--page-text-highlight);
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: inline-block;
  font-size: 16px;
  position: absolute;
}

.ob-pair {
  position: absolute;
  top: 38px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid var(--page-text);
  border-bottom: 1px solid var(--page-text);
  padding: 10px;
  box-sizing: border-box;
}

.ob-pair span {
  display: inline-block;
}

.ob-book {
  position: absolute;
  top: 72px;
  bottom: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.ob-sell {
  max-height: 50%;
  overflow-y: auto;
}

.ob-buy {
  overflow-y: auto;
  flex: 1;
  border-top: 3px solid var(--page-text);
  box-sizing: border-box;
}

.ob-item {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 3px 0;
  cursor: pointer;
}

.ob-item:hover {
  background-color: var(--page-bg);
}

.ob-buy .ob-item {
  color: var(--color-rise);
}

.ob-sell .ob-item {
  color: var(--color-fall);
}
</style>