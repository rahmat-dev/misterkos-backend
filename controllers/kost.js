const models = require('../models')
const Kost = models.kost

exports.index = (req, res) => {
  Kost.findAll().then(kosts => res.send(kosts))
}

// exports.show = (req, res) => {
//   const { id } = req.params
//   Kost.findOne({where: {id}}).then(kosts => res.send(kosts))
// }