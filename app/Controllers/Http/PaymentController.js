'use strict'

const Payment = use('App/Models/Payment')

class PaymentController {
  async index ({ params }) {
    const payments = await Payment.query()
      .where('order_id', params.orders_id)
      .with('orders')
      .fetch()

    return payments
  }

  async store ({ request, params }) {
    const data = request.only(['type', 'status'])

    const payment = await Payment.create({
      ...data,
      order_id: params.orders_id
    })

    return payment
  }

  async show ({ params }) {
    const payment = await Payment.findOrFail(params.id)

    await payment.load('order')

    return payment
  }

  async update ({ params, request }) {
    const payment = await Payment.findOrFail(params.id)
    const data = request.only(['type', 'status'])

    payment.merge(data)

    await payment.save()

    return payment
  }

  async destroy ({ params }) {
    const payment = await Payment.findOrFail(params.id)

    await payment.delete()
  }
}

module.exports = PaymentController
