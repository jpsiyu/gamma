const key = 'gamma-orders'
let orders = []

const init = () => {
  const data = localStorage.getItem(key)
  orders = data ? JSON.parse(data) : []
}

const save = () => {
  localStorage.setItem(key, JSON.stringify(orders))
}

const getOrders = () => {
  return orders
}

const addOrder = order => {
  const index = orders.findIndex(e => {
    return e.transactionHash === order.transactionHash
  })
  if (index !== -1) return
  orders.push(order)
  save()
}

const removeOrder = order => {
  const index = orders.findIndex(e => {
    return e.transactionHash === order.transactionHash
  })
  if (index === -1) return
  orders.splice(index, 1)
  save()
}

const clear = () => {
  orders = []
  save()
}

init()

export default {
  getOrders,
  addOrder,
  removeOrder,
  clear
}