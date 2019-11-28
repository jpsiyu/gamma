import Vue from 'vue'
import deploy from '@/assets/smart-contract/deploy'
import Web3 from 'web3'

class Gamma {
  constructor() {
    const web3 = new Web3(window.ethereum)
    this.instance = new web3.eth.Contract(deploy.gammaAbi, deploy.gammaAddress)
  }

  tokenAddress() {
    return deploy.address
  }

  balanceOf(tokenAddress, userAddress) {
    return this.instance.methods.balanceOf(tokenAddress, userAddress).call()
  }

  depositToken(address, amount) {
    return this.instance.methods.depositToken(address, amount).call()
  }
}

const gamma = new Gamma()
Vue.prototype.$gamma = gamma

export default gamma