const multer = require('multer')

const fileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images/kost')
  },
  filename: (req, file, callback) => {
    ext = file.mimetype.split('/')
    callback(null, `kost_${Date.now()}.${ext[ext.length-1]}`)
  }
})

module.exports = multer({ storage: fileStorage }).fields([{name: 'image1'}, {name: 'image2'}, {name: 'image3'}])