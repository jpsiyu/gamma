import deploy from '@/assets/smart-contract/deploy'
import Web3 from 'web3'

class MetaMask {
  constructor() {
    this.init()
  }

  init() {
    const web3 = new Web3(window.ethereum)
    const gamma = new web3.eth.Contract(deploy.abi, deploy.address)
    gamma.methods.currentEventId().call()
      .then(res => {
        console.log('res', res)
      })
  }
}

const metamask = new MetaMask()

export default metamask