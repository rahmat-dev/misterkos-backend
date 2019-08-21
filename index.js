const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

// Controllers
const UserController = require('./controllers/user')
// const OfferController = require('./controllers/offer')
// const KosController = require('./controllers/kos')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.group('/api', (router) => {
  // Auth Route
  router.get('/user/:id', UserController.show)
  router.post('/login', UserController.login)
  router.post('/register', UserController.register)

  // Offer Route
  // router.post('/offer', OfferController.create)

  // Kos Route
  // router.get('/kos', KosController.index)
  // router.get('/kos/:id', KosController.show)

})

app.listen(port, () => console.log(`Sedang berjalan di port ${port}`))
