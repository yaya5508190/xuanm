const users = require('./users')
const upload = require('./upload')
const router = require('express').Router()

module.exports = function (dbs) {
  // Add USERS Routes
  router.use(users(dbs))
  router.use(upload(dbs))
  return router
}
