<template>
  <div class="bs">
    <span class="bs-title">Buy/Sell</span>
    <el-tabs v-model="activeName" class="bs-tabs elcustom-tabs">
      <el-tab-pane label="Buy Order" name="buy"></el-tab-pane>
      <el-tab-pane label="Sell Order" name="sell"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: ''
    }
  },
}
</script>

<style scoped>
.bs {
  background: var(--container-bg);
  color: var(--page-text);
  flex: 1;
  font-size: 12px;
  padding-bottom: 50px;
  position: relative;
}

.bs-title {
  background-color: var(--container-top);
  color: var(--page-text-highlight);
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: inline-block;
  font-size: 16px;
  position: absolute;
}

.bs-tabs {
  position: absolute;
  top: 38px;
  bottom: 0;
  overflow-y: auto;
  width: 100%;
}
</style>

<style src="@/assets/elcustom.css" scoped /> 