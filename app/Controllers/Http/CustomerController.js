'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {
  async index () {
    const customers = await Customer.all()

    return customers
  }

  async store ({ request, auth }) {
    const data = request.only(['name', 'email', 'phone'])

    const customer = await Customer.create({ ...data, user_id: auth.user.id })

    return customer
  }

  async show ({ params }) {
    const customer = await Customer.findOrFail(params.id)

    await customer.load('user')

    return customer
  }

  async update ({ params, request }) {
    const customer = await Customer.findOrFail(params.id)
    const data = request.only(['name', 'email', 'phone'])

    customer.merge(data)

    await customer.save()

    return customer
  }

  async destroy ({ params, request, response }) {
    const customer = await Customer.findOrFail(params.id)

    await customer.delete()
  }
}

module.exports = CustomerController
