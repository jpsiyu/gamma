<template>
  <div class="nav">
    <img class="nav-logo" src="@/assets/logo.png" alt />
    <span class="nav-title">Gamma</span>
    <span class="nav-pair">
      {{curPair[0]}}
      <i class="nav-icon el-icon-arrow-down"></i>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      pairs: state => state.pairs,
      curPair: state => state.curPair,
    }),
  }
}
</script>

<style scoped>
.nav {
  background: var(--container-top);
  color: var(--page-text);
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.nav-logo {
  width: 20px;
  height: 20px;
}

.nav-title {
  margin-left: 10px;
}

.nav-pair {
  margin-left: 10px;
  border: 1px solid var(--page-text);
  border-radius: 20px;
  padding: 0 10px;
  cursor: pointer;
}

.nav-icon {
  font-size: 12px;
  margin-left: 3px;
}
</style>