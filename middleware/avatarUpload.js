const multer = require('multer')

const fileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images/avatar')
  },
  filename: (req, file, callback) => {
    ext = file.mimetype.split('/')
    callback(null, `avatar_${Date.now()}.${ext[ext.length-1]}`)
  }
})

module.exports = multer({ storage: fileStorage })