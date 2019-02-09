'use strict'

class ForgetPasswordUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      password: 'required|confirmed|min:6',
      token: 'required'
    }
  }
}

module.exports = ForgetPasswordUpdate
