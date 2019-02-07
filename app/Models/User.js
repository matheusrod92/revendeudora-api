'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  products () {
    return this.hasMany('App/Models/Product')
  }

  customers () {
    return this.hasMany('App/Models/Customer')
  }

  orders () {
    return this.hasMany('App/Models/Order')
  }

  payments () {
    return this.manyThrough('App/Models/Order', 'payment')
  }
}

module.exports = User
