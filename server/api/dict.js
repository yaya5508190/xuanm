import dict from '../utils/dict'
import {Router} from 'express'

const router = Router()

export default function () {
  router.get('/dict/:key', function (req, res, next) {
    res.json(dict[req.params.key])
  })
  return router
}
