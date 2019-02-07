'use strict'

class Customer {
  get rules () {
    return {
      name: "required|string|regex:^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ'-]+ [a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ'. -]*$",
      email: 'required|email',
      phone: 'required'
    }
  }
}

module.exports = Customer
