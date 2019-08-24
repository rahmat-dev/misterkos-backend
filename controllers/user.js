const jwt = require('jsonwebtoken')
const Cryptr = require('cryptr')
const cryptr = new Cryptr('misterkos')

const models = require('../models')
const User = models.user

// GET USERS
exports.index = async (req, res) => {
  await User.findAll()
    .then(users => res.send(users))
    .catch(err => res.send(err))
}

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

    res.status(404).send({ detail: 'user not found' })
  }).catch(err => {
    console.log(err)
    res.status(500).send({ detail: err })
  })
}

// LOGIN
exports.login = (req, res) => {
  const { username, password } = req.body

  User.findOne({ where: { username } }).then(user => {
    if (user) {
      if (password == cryptr.decrypt(user.password)) {
        const token = jwt.sign({ id: user.id }, 'misterkos-secret')
        res.send({
          token,
          valid: true
        })
      } else {
        res.send({ valid: false, message: 'Password Salah' })
      }
    } else {
      res.send({ valid: false, message: 'User belum terdaftar' })
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
      User.create({
        name,
        username,
        password: cryptr.encrypt(password),
        gender,
        phone,
        avatar
      }).then(user => {
        if (user) {
          res.send({
            error: false,
            user
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
