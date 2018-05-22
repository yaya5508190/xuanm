const router = require('express').Router()
const moment = require('moment')
const fs = require('fs')
const path = require('path')
const uuid = require('node-uuid')

export default function (dbs) {
  router.post('/partner', function (req, res, next) {
    const carousel = req.body
    dbs.xuanm.eval('getNextSequenceValue("partnerid")').then((id) => {
      carousel.id = uuid.v1()
      carousel.order = id
      carousel.createDate = moment().format('YYYY-MM-DD HH:mm:ss')
      dbs.xuanm.collection('partner').updateOne({_id: 1}, {$push: {partners: carousel}}, (err, r) => {
        if (err) {
          res.json(err)
        }
        res.json(r.result)
      })
    })
  })
  router.get('/partner', function (req, res, next) {
    dbs.xuanm.collection('partner').findOne({_id: 1}, (err, r) => {
      if (err) {
        res.json(err)
      }
      res.json(r.partners)
    })
  })
  router.delete('/partner/:id', function (req, res, next) {
    try {
      fs.unlinkSync(path.resolve('server/upload/images/' + req.query.filename))
    } catch (err) {
      console.error(err)
    }
    dbs.xuanm.collection('partner').updateOne({_id: 1}, {$pull: {'partners': {'id': req.params.id}}}, (err, r) => {
      if (err) {
        res.json(err)
      }
      res.json(r.result)
    })
  })

  router.post('/partner/sort', function (req, res, next) {
    const partner = req.body
    dbs.xuanm.collection('partner').updateOne({_id: 1}, {$set: {partners: partner}}, (err, r) => {
      if (err) {
        res.json(err)
      }
      res.json(r.result)
    })
  })
  return router
}
