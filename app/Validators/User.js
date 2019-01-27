'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: "required|string|regex:^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ'-]+ [a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ'. -]*$",
      email: 'required|email|unique:users',
      password: 'required|string|confirmed|min:6'
    }
  }
}

module.exports = User
