const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
require('express-group-routes')

// Controllers
const UserController = require('./controllers/user')
const KostController = require('./controllers/kost')

// Middlewares
const { authenticated } = require('./middleware')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  req.send("App")
})

app.group('/api', (router) => {
  
  // User Route
  router.get('/user/me', authenticated, UserController.show)

  // Auth Route
  router.post('/login', UserController.login)
  router.post('/register', UserController.register)

  // Kos Route
  router.get('/kost', KostController.index)
  // router.get('/kost/:id', KostController.show)

})

app.listen(port, () => console.log(`Sedang berjalan di port ${port}`))
