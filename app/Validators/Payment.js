'use strict'

class Payment {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      type: 'required|max:80',
      status: 'required|max:80'
    }
  }
}

module.exports = Payment
