<template>
  <div class="nav">
    <div class="nav-left">
      <img class="nav-logo" src="@/assets/logo.png" alt />
      <span class="nav-title">Gamma</span>
      <el-dropdown @command="handleCommand">
        <span class="nav-pair">
          {{curPair.coin}}
          <i class="nav-icon el-icon-arrow-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item, index) in pairs"
            :key="index"
            :command="item"
          >{{item.coin}}</el-dropdown-item>
          <el-dropdown-item command="other">{{$t('nav.other')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="nav-right">
      <el-dropdown @command="handleLang">
        <span class="nav-lang">{{language.label }}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item in languageSupport"
            :key="item.key"
            :command="item"
          >{{item.label}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span v-if="account" class="nav-account">{{account}}</span>
      <el-button class="nav-btnLogin" v-else type="success" @click="login">{{$t('nav.login')}}</el-button>
    </div>
    <DepositToken ref="deposit" />
  </div>
</template>

<script>
import DepositToken from '@/components/popup/DepositToken'
import storage from '@/scripts/storage'
import { mapState } from 'vuex'
export default {
  components: { DepositToken },
  data() {
    return {
      language: {}
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
      pairs: state => state.pairs,
      curPair: state => state.curPair,
    }),
    languageSupport() {
      return [
        { label: "English", key: 'en' },
        { label: "中文", key: 'zh-cn' },
      ]
    }
  },
  created() {
    this.initLang()
  },
  methods: {
    handleCommand(item) {
      if (item === 'other') {
        this.handleOther()
        return
      }
      const path = item.coin + '_' + item.base
      this.$router.push({ path }).catch(() => { })
    },
    initLang() {
      const lang = storage.getLanguage()
      this.$i18n.locale = lang
      const target = this.languageSupport.find(e => {
        return e.key === lang
      })
      this.language = target || this.languageSupport[0]
    },
    handleLang(lang) {
      this.language = lang
      this.$i18n.locale = lang.key
      storage.setLanguage(lang.key)
    },
    handleOther() {
      this.$refs.deposit.show()
    },
    login() {
      this.$gamma.metamaskEnable()
        .then(accounts => {
          const account = accounts[0]
          this.$store.commit('setAccount', account)
        })
    }
  }
}
</script>

<style scoped>
.nav {
  background: var(--container-top);
  color: var(--page-text);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-left {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.nav-right {
  margin-right: 20px;
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
  color: var(--page-text);
}

.nav-lang {
  display: inline-block;
  margin: 0 20px;
  color: var(--page-text);
  cursor: pointer;
}

.nav-icon {
  font-size: 12px;
  margin-left: 3px;
}

.nav-account {
  display: inline-block;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid var(--page-text);
  border-radius: 10px;
  padding: 0 5px;
}

.nav-btnLogin {
  padding: 4px 15px;
}
</style>