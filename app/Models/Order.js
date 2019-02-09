'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  static get computed () {
    return ['totalAmount']
  }

  // relationships
  products () {
    return this.belongsToMany('App/Models/Product').withTimestamps()
  }

  payment () {
    return this.hasOne('App/Models/Payment')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  // computed methods
  totalAmount ({ products }) {
    return products.reduce(
      (accumulator, product) => accumulator + product.value,
      0
    )
  }
}

module.exports = Order
