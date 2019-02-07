'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  orders () {
    return this
      .belongsToMany('App/Models/Order')
      .withTimestamps()
  }
}

module.exports = Product
