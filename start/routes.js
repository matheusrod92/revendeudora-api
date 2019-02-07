'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('users', 'UserController').only(['store'])
Route.resource('sessions', 'SessionController').only(['store'])
Route.post('password', 'ForgetPasswordController.store').as('password.store')
Route.put('password', 'ForgetPasswordController.update').as('password.update')

Route.group(() => {
  Route.resource('customers', 'CustomerController').apiOnly()
  Route.resource('orders', 'CustomerController').apiOnly()
  Route.resource('orders.payments', 'CustomerController').apiOnly()
  Route.resource('products', 'CustomerController').apiOnly()
}).middleware(['auth'])
