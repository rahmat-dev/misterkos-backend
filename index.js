const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
require('express-group-routes')

// Controllers
const UserController = require('./controllers/user')
const KostController = require('./controllers/kost')

// Middlewares
const { authenticated } = require('./middleware/auth')

// config
const kostUpload = require('./middleware/kost-upload')

const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/images", express.static(path.join(__dirname, "images")));

app.group('/api', (router) => {
  
  // User Route
  router.get('/users', UserController.index)
  router.get('/user/me', authenticated, UserController.show)

  // Auth Route
  router.post('/login', UserController.login)
  router.post('/register', UserController.register)

  // Kos Route
  router.get('/kost', KostController.index)
  router.get('/kost/:id', KostController.show)
  router.post('/kost', authenticated, kostUpload, KostController.store)
  router.patch('/kost/:id', authenticated, KostController.update)
  router.delete('/kost/:id', authenticated, KostController.destroy)

})

app.listen(port, () => console.log(`Sedang berjalan di port ${port}`))
