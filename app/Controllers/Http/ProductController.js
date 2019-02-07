'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index () {
    const products = await Product.all()

    return products
  }

  async store ({ request, auth }) {
    const data = request.only(['sku', 'name', 'value', 'description'])

    const product = await Product.create({ ...data, user_id: auth.user.id })

    return product
  }

  async show ({ params }) {
    const product = await Product.findOrFail(params.id)

    await product.load('user')
    await product.load('orders')

    return product
  }

  async update ({ params, request }) {
    const product = await Product.findOrFail(params.id)
    const data = request.only(['sku', 'name', 'value', 'description'])

    product.merge(data)

    await product.save()

    return product
  }

  async destroy ({ params, request, response }) {
    const product = await Product.findOrFail(params.id)

    await product.delete()
  }
}

module.exports = ProductController
