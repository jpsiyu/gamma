<template>
  <el-dialog :visible.sync="visible" title="Deposit Token" :append-to-body="true">
    <el-form :model="form" ref="form" label-position="top">
      <el-form-item label="Token Address:" prop="address">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="Deposit Amount:" prop="amount">
        <el-input v-model="form.amount"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button type="primary" @click="confirm">Confirm</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      form: {
        address: '',
        amount: '',
      }
    }
  },
  created() {
    this.$gamma.balanceOf('0x692a70D2e424a56D2C6C27aA97D1a86395877b3A', '0x2C0BA1b49072D35C578829eE29C0eF5A3f01d804')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
    confirm() {
      if (!this.form.address) {
        return this.$message({ message: 'Please input token address.', type: 'warning' })
      }

      if (!this.form.amount) {
        return this.$message({ message: 'Please input deposit amount.', type: 'warning' })
      }

      this.$gamma.depositToken(this.form.address, this.form.amount)
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>