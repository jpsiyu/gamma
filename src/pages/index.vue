<template>
  <div class="home">
    <div class="home-colA">
      <Balance />
    </div>
    <div class="home-colB"></div>
    <div class="home-colC"></div>
    <div class="home-colD"></div>
  </div>
</template>

<script>
import Balance from '@/components/Balance'
export default {
  components: { Balance }
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
}

.home-colA{
  flex: 1;
  padding: 0 10px;
}

.home-colB{
  flex: 1;
}

.home-colC{
  flex: 2;
}

.home-colD{
  flex: 1;
}
</style>
