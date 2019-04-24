import {Router} from 'express'
import moment from 'moment'
import fs from 'fs'
import path from 'path'
import uuid from 'node-uuid'

const router = Router()

export default function (dbs) {
  router.post('/carousels', function (req, res, next) {
    const carousel = req.body
    dbs.xuanm.eval('getNextSequenceValue("carouselid")').then((id) => {
      carousel.id = uuid.v1()
      carousel.order = id
      carousel.createDate = moment().format('YYYY-MM-DD HH:mm:ss')
      dbs.xuanm.collection('carousels').updateOne({_id: 1}, {$push: {carousels: carousel}}, (err, r) => {
        if (err) {
          res.json(err)
        }
        res.json(r.result)
      })
    })
  })
  router.get('/carousels', function (req, res, next) {
    dbs.xuanm.collection('carousels').findOne({_id: 1}, (err, r) => {
      if (err) {
        res.json(err)
      }
      res.json(r.carousels)
    })
  })
  router.delete('/carousels/:id', function (req, res, next) {
    try {
      fs.unlinkSync(path.resolve('server/upload/images/' + req.query.filename))
    } catch (err) {
      console.error(err)
    }
    dbs.xuanm.collection('carousels').updateOne({_id: 1}, {$pull: {'carousels': {'id': req.params.id}}}, (err, r) => {
      if (err) {
        res.json(err)
      }
      res.json(r.result)
    })
  })

  router.post('/carousels/sort', function (req, res, next) {
    const carousels = req.body
    dbs.xuanm.collection('carousels').updateOne({_id: 1}, {$set: {carousels: carousels}}, (err, r) => {
      if (err) {
        res.json(err)
      }
      res.json(r.result)
    })
  })
  return router
}
