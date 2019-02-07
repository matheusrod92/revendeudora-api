'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentSchema extends Schema {
  up () {
    this.create('payments', (table) => {
      table.increments()
      table.integer('order_id').unsigned().references('id').inTable('orders')
      table.string('type', 80).notNullable()
      table.string('status', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('payments')
  }
}

module.exports = PaymentSchema
