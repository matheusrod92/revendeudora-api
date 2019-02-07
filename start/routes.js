'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('users', 'UserController').only(['store'])
Route.resource('sessions', 'SessionController').only(['store'])
Route.group(() => {
  Route.post('password', 'ForgetPasswordController.store').as('password.store')
  Route.put('password', 'ForgetPasswordController.update').as('password.update')
})
