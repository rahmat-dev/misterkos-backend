const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

// GET USER
exports.show = async (req, res) => {
  await User.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    if (user) {
      return res.status(200).send(user)
    }

    res.status(404, { detail: 'user not found' })
  }).catch(err => {
    console.log(err)
    res.status(500).send({ detail: err })
  })
}

// LOGIN
exports.login = (req, res) => {
  const { username, password } = req.body

  User.findOne({ where: { username, password } }).then(user => {
    if (user) {
      const token = jwt.sign({id: user.id}, 'misterkos-secret')
      res.send({
        user,
        token,
        valid: true
      })
    } else {
      res.send({ valid: false })
    }
  })
}

// REGISTER
exports.register = (req, res) => {
  const { name, username, password, gender, phone, avatar } = req.body

  User.findOne({ where: { username } }).then(user => {
    if (user) {
      res.send({
        error: true,
        message: 'Username sudah digunakan'
      })
    } else {
      User.create({ name, username, password, gender, phone, avatar: 'avatar.png' }).then(user => {
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
