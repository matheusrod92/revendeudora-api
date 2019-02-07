'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name', 80).notNullable()
      table.string('email', 254).unique()
      table.string('phone', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
