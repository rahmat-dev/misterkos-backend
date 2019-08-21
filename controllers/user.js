const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

exports.show = (req, res) => {
  const id = req.id

  User.findOne({where: {id}}).then(user => {
    res.send({
      user
    })
  }).catch(error => {
    console.log(error)
  })
}

exports.login = (req, res) => {
  const { username, password } = req.body

  User.findOne({where: {username, password}}).then(user => {
    if (user) {
      const token = jwt.sign({ id: user.id }, 'misterkos-secret')
      res.send({
        user,
        token,
        valid: true
      })
    } else {
      res.send({valid: false})
    }
  })
}

exports.register = (req, res) => {
  const { name, username, password, gender, phone, avatar } = req.body

  User.findOne({where: {username}}).then(user => {
    if (user) {
      res.send({
        error: true,
        message: 'Username sudah digunakan'
      })
    } else {
      User.create({name, username, password, gender, phone, avatar: 'avatar.png'}).then(user => {
        if (user) {
          res.send({
            user,
            error: false
          })
        }
      }).catch(error => {
        res.send({
          error: true,
          message: 'Data gagal ditambahkan'
        })
      })
    }
  })
}
