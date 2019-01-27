'use strict'

const { moreThan } = require('../../../utils/date')
const crypto = require('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgetPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      const redirectUrl = request.input('redirect_url')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        ['emails.forget_password', 'emails.forget_password-text'],
        {
          email,
          token: user.token,
          link: `${redirectUrl}?token=${user.token}`
        },
        message =>
          message
            .to(user.email)
            .from('matheusrod92@gmail.com', 'Matheus')
            .subject('Recuperação de senha')
      )
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo não deu certo, este email existe?' } })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()
      const user = await User.findByOrFail('token', token)
      const moreThanTwoDays = moreThan(2)
      const tokenExpired = moreThanTwoDays(user.token_created_at)

      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'O token de recuperação está expirado' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo deu errado ao resetar sua senha' } })
    }
  }
}

module.exports = ForgetPasswordController
