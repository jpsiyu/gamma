import Vue from 'vue'
import deploy from '@/assets/smart-contract/deploy'
import Web3 from 'web3'

class Gamma {
  constructor() {
    if (!(window.ethereum && window.ethereum.isMetaMask)) {
      const msg = 'Need MetaMask Support!'
      alert(msg)
      throw new Error(msg)
    }

    const web3 = new Web3(window.ethereum)
    this.dex = new web3.eth.Contract(deploy.DexABI, deploy.DexAddr)
    this.token = new web3.eth.Contract(deploy.Erc20ABI, deploy.Erc20Addr)

  }

  metamaskEnable() {
    return window.ethereum.enable()
  }

  dexAddr() {
    return deploy.DexAddr
  }

  tokenAddr(){
    return deploy.Erc20Addr
  }
}

const gamma = new Gamma()
Vue.prototype.$gamma = gamma

export default gamma