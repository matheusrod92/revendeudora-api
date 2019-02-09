'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('users', 'UserController')
  .only(['store'])
  .validator(new Map([[['users.store'], ['User']]]))
Route.resource('sessions', 'SessionController')
  .only(['store'])
  .validator(new Map([[['sessions.store'], ['Session']]]))
Route.post('password', 'ForgetPasswordController.store')
  .as('password.store')
  .validator('ForgetPasswordStore')
Route.put('password', 'ForgetPasswordController.update')
  .as('password.update')
  .validator('ForgetPasswordUpdate')

Route.group(() => {
  Route.resource('customers', 'CustomerController')
    .apiOnly()
    .validator(
      new Map([
        [['customers.store'], ['Customer']],
        [['customers.update'], ['Customer']]
      ])
    )
  Route.resource('orders', 'OrderController')
    .apiOnly()
    .validator(
      new Map([[['orders.store'], ['Order']], [['orders.update'], ['Order']]])
    )
  Route.resource('orders.payments', 'PaymentController')
    .apiOnly()
    .validator(
      new Map([
        [['orders.payments.store'], ['Payment']],
        [['orders.payments.update'], ['Payment']]
      ])
    )
  Route.resource('products', 'ProductController')
    .apiOnly()
    .validator(
      new Map([
        [['products.store'], ['Product']],
        [['products.update'], ['Product']]
      ])
    )
}).middleware(['auth'])
