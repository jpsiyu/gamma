<template>
  <div class="home">
    <div class="home-colA">
      <Balance />
      <div class="home-split-hori"></div>
      <BuySell />
    </div>
    <div class="home-split-vert"></div>
    <div class="home-colB">
      <OrderBook />
    </div>
    <div class="home-split-vert"></div>
    <div class="home-colC">
      <PriceChart />
      <div class="home-split-hori"></div>
      <Transactions />
    </div>
    <div class="home-split-vert"></div>
    <div class="home-colD">
      <TradesVolumn />
      <div class="home-split-hori"></div>
      <Updates />
    </div>
  </div>
</template>

<script>
import Balance from '@/components/home/Balance'
import BuySell from '@/components/home/BuySell'
import OrderBook from '@/components/home/OrderBook'
import PriceChart from '@/components/home/PriceChart'
import Transactions from '@/components/home/Transactions'
import TradesVolumn from '@/components/home/TradesVolumn'
import Updates from '@/components/home/Updates'
export default {
  components: { Balance, BuySell, OrderBook, PriceChart, Transactions, TradesVolumn, Updates },
}
</script>

<style scoped>
.home {
  background: var(--page-bg);
  color: var(--page-text);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 10px 0;
}

.home-colA,
.home-colD {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.home-colB {
  flex: 1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.home-colC {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.home-split-hori {
  height: 10px;
  width: 100%;
}

.home-split-vert {
  width: 10px;
  height: 100%;
}
</style>
