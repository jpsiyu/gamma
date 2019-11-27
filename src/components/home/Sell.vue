<template>
  <div class="sell">
    <el-form :model="form" :ref="form" label-position="top">
      <el-form-item label="Amount to sell" prop="amount">
        <el-input v-model="form.amount">
          <span slot="append">{{pairArray[0]}}</span>
        </el-input>
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input v-model="form.price">
          <span slot="append">{{pairArray[1]}}</span>
        </el-input>
      </el-form-item>
      <el-form-item label="Total" prop="total">
        <el-input v-model="form.total" readonly></el-input>
      </el-form-item>
      <el-form-item label="Expires" prop="expires">
        <el-input v-model="form.expires">
          <span slot="append">Blocks</span>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button type="danger" class="sell-button">Sell Order</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        amount: '',
        price: '',
        total: '0.000',
        expires: '10000',
      }
    }
  },
  computed: {
    pairArray() {
      const pair = this.$route.params.pair
      const pairArray = pair.split('_')
      return pairArray
    }
  }
}
</script>

<style scoped>
.sell {
  padding: 0 10px;
  margin-bottom: 50px;
}

.sell-button {
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
}

.sell >>> .el-form-item__label {
  color: var(--page-text);
}

.sell >>> .el-input-group__append,
.sell >>> .el-input__inner {
  border: none;
  background-color: var(--page-bg);
  color: var(--page-text);
}
</style>