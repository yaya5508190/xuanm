const router = require('express').Router()

module.exports = function (dbs) {
  // Mock Users
  const users = [
    {name: 'Alexandre'},
    {name: 'Pooya'},
    {name: 'Sébastien'}
  ]
  /* GET users listing. */
  router.get('/users', function (req, res, next) {
    res.json(users)
  })

  // /* GET user by ID. */
  // router.get('/users/:id', function (req, res, next) {
  //   const id = parseInt(req.params.id)
  //   if (id >= 0 && id < users.length) {
  //     res.json(users[id])
  //   } else {
  //     res.sendStatus(404)
  //   }
  // })

  router.get('/users/insert', function (req, res, next) {
    dbs.xuanm.eval('getNextSequenceValue("carouselid")').then((id) => {
      dbs.xuanm.collection('inserts').insertOne({a: id}, (err, r) => {
        if (err) {
          res.json(err)
        }
        res.json({success: 1})
      })
    })
  })
  return router
}
