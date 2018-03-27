const upload = require('./upload')
const carousels = require('./carousels')
const dict = require('./dict')
const topic = require('./topic')
const partner = require('./partner')
const router = require('express').Router()

module.exports = function (dbs) {
  router.use(upload(dbs))
  router.use((carousels(dbs)))
  router.use((dict(dbs)))
  router.use((topic(dbs)))
  router.use((partner(dbs)))
  return router
}
