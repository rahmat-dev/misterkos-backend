const models = require('../models')
const Kost = models.kost
const User = models.user

exports.index = (req, res) => {
  Kost.findAll().then(kosts => res.send(kosts))
}

exports.show = (req, res) => {
  const { id } = req.params
  Kost.findOne({
    where: 
    {
      id
    }
  }).then(kost => res.send(kost))
}

exports.store = async (req, res) => {
  const { ...data } = req.body
  const { image1, image2, image3 } = req.files

  await User.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    if (user) {
      Kost.create({
        ...data,
        image1: image1[0].filename,
        image2: image2[0].filename,
        image3: image3[0].filename,
        createdBy: user.id
      }).then(kost => {
        res.status(200).send({status: 'success'})
      })
    }

    res.status(404, { detail: 'user not found' })
  }).catch(err => {
    console.log(err)
    res.status(500).send({ detail: err })
  })


}

exports.update = (req, res) => {
  const { id } = req.params
  const { ...data } = req.body
  const { userId } = req.user.id

  Kost.findOne({where: {id, createdBy: userId}}).then(kost => {
    if (kost) {
      kost.update(data).then(kostUpdate => {
        res.status(200).send(kostUpdate)
      }).catch(err => {
        res.send('error')
      })
    } else {
      res.send('Ini bukan iklan Anda')  
    }
  }).catch(err => {
    res.send(err)
  })
}

exports.destroy = (req, res) => {
  const { id } = req.params

  Kost.findByPk(id).then(kost => {
    if (kost) {
      kost.destroy().then(kostDestroy => {
        res.status(200).send({message: 'success'})
      }).catch(err => {
        res.send(err)
      })
    } else {
      res.status(400).send({message: `Tidak ada iklan kost dengan id ${id}`})
    }
  }).catch(err => {
    res.send(err)
  })
}

// exports.mykost = async (req, res) => {
//   await User.findOne({
//     where: {
//       id: req.user.id
//     }
//   }).then(user => {
//     if (user) {
//       Kost = 
//     }

//     res.status(404, { detail: 'user not found' })
//   }).catch(err => {
//     console.log(err)
//     res.status(500).send({ detail: err })
//   })
// }