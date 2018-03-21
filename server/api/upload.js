const router = require('express').Router()
const upload = require('multer')({ dest: 'server/upload/images/' })
const fs = require('fs')
const path = require('path')

module.exports = function (dbs) {
  router.post('/upload', upload.single('image'), function (req, res, next) {
    res.json({
      'url': '/static/images/' + req.file.filename,
      'filename': req.file.filename
    })
  })

  router.delete('/upload', function (req, res, next) {
    fs.unlinkSync(path.resolve('server/upload/images/' + req.query.filename))
    res.json({'success': 1})
  })

  return router
}
