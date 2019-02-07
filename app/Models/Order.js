'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  products () {
    return this
      .belongsToMany('App/Models/Product')
      .withTimestamps()
  }

  payment () {
    return this.hasOne('App/Models/Payment')
  }
}

module.exports = Order
