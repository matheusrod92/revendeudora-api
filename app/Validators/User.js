'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name:
        "required|regex:^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ'-]+ [a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ'. -]*$",
      email: 'required|email|unique:users',
      password: 'required|confirmed|min:6'
    }
  }
}

module.exports = User
