import {Router} from 'express'
import multer from 'multer'
import fs from 'fs'
import path from 'path'

const router = Router()
const upload = multer({ dest: 'server/upload/images/' })

export default function (dbs) {
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
