'use strict'

class Product {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      sku: 'required|unique|string|max:20',
      name: 'required|string|max:80',
      value: 'required|number|range:0,99999',
      description: 'string|max:255'
    }
  }
}

module.exports = Product
