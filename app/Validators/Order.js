'use strict'

class Order {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      status: 'required|max:80'
    }
  }
}

module.exports = Order
