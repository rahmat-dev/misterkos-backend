const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

// Controllers
const UserController = require('./controllers/user')
const KostController = require('./controllers/kost')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.group('/api', (router) => {
  // Auth Route
  router.get('/user/:id', UserController.show)
  router.post('/login', UserController.login)
  router.post('/register', UserController.register)

  // Kos Route
  router.get('/kost', KostController.index)
  router.get('/kost/:id', KostController.show)

})

app.listen(port, () => console.log(`Sedang berjalan di port ${port}`))
