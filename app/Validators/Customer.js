'use strict'

class Customer {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name:
        "required|regex:^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ'-]+ [a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ'. -]*$",
      email: 'required|email',
      phone: 'required'
    }
  }
}

module.exports = Customer
