'use strict'

const Order = use('App/Models/Order')

class OrderController {
  async index ({ request, response, view }) {
    const orders = await Order.all()

    return orders
  }

  async store ({ request, auth }) {
    const data = request.only(['customer_id', 'status'])

    const order = await Order.create({ ...data, user_id: auth.user.id })

    return order
  }

  async show ({ params, request, response, view }) {
    const order = await Order.findOrFail(params.id)

    await order.load('products')
    await order.load('user')
    await order.load('payment')

    return order
  }

  async update ({ params, request, response }) {
    const order = await Order.findOrFail(params.id)
    const data = request.only(['status'])

    order.merge(data)

    await order.save()

    return order
  }

  async destroy ({ params, request, response }) {
    const order = await Order.findOrFail(params.id)

    await order.delete()
  }
}

module.exports = OrderController
