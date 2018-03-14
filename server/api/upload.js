const router = require('express').Router()
const upload = require('multer')({ dest: 'server/upload/images/' })

module.exports = function (dbs) {
  router.post('/upload', upload.single('image'), function (req, res, next) {
    res.json({'url': '/static/images/' + req.file.filename})
  })
  return router
}
