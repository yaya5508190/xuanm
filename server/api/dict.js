const dict = require('../utils/dict')
const router = require('express').Router()

export default function () {
  router.get('/dict/:key', function (req, res, next) {
    res.json(dict[req.params.key])
  })
  return router
}
