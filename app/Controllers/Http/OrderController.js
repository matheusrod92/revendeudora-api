'use strict'

const Order = use('App/Models/Order')

class OrderController {
  async index () {
    const orders = await Order.all()

    return orders
  }

  async store ({ request, auth }) {
    const { payment, ...data } = request.only([
      'customer_id',
      'status',
      'payment'
    ])

    const order = await Order.create({ ...data, user_id: auth.user.id })

    if (payment) {
      await order.payment().create(payment)
      await order.load('payment')
    }

    return order
  }

  async show ({ params }) {
    const order = await Order.findOrFail(params.id)

    await order.load('products')
    await order.load('user')
    await order.load('payment')

    return order
  }

  async update ({ params, request }) {
    const order = await Order.findOrFail(params.id)
    const { payment, ...data } = request.only(['status', 'payment'])

    order.merge(data)
    await order.save()

    if (payment) {
      await order.payment().update(payment)
      await order.load('payment')
    }

    return order
  }

  async destroy ({ params }) {
    const order = await Order.findOrFail(params.id)

    await order.delete()
  }
}

module.exports = OrderController
