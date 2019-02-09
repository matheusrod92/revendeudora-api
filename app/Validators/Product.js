'use strict'

class Product {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      sku: 'required|unique|max:20',
      name: 'required|max:80',
      value: 'required|number|range:0,99999',
      description: 'max:255'
    }
  }
}

module.exports = Product
