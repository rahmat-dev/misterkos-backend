const models = require('../models')
const Kost = models.kost

exports.index = (req, res) => {
  Kost.findAll().then(kosts => res.send(kosts))
}

// exports.show = (req, res) => {
//   const { id } = req.params
//   Kost.findOne({where: {id}}).then(kosts => res.send(kosts))
// }

exports.store = (req, res) => {
  const { title, address, location, type, large, totalRoom, emptyRoom, price, facilities, bathroom, image1, image2, image3, createdBy, description } = req.body
  Kost.create({ title, address, location, type, large, totalRoom, emptyRoom, price, facilities, bathroom, image1, image2, image3, createdBy, description }).then(kost => res.send(kost))
}