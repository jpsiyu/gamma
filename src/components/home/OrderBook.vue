<template>
  <div class="ob">
    <span class="ob-title">Order Book</span>
  </div>
</template>

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
</style>