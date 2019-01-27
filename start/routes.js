'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('password', 'ForgetPasswordController.store')
Route.put('password', 'ForgetPasswordController.update')
