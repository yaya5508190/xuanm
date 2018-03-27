const router = require('express').Router()
const mongo = require('mongodb')
const moment = require('moment')
const _ = require('lodash')
const dict = require('../utils/dict')

// const moment = require('moment')
// const fs = require('fs')
// const path = require('path')

module.exports = function (dbs) {
  router.get('/topic', function (req, res, next) {
    const topic = req.body.topic || {}
    const paging = req.body.paging
    if (paging) {
      dbs.xuanm.collection('topics').find(topic).skip(paging.page * paging.limit).limit(paging.limit).toArray(function (err, result) {
        if (err) {
          res.json(err)
        }
        _.forEach(result, function (value) {
          value.topicTypeText = _.find(dict.topicType, {'value': value.topicType}).text
        })
        res.json(result)
      })
    } else {
      dbs.xuanm.collection('topics').find(topic).toArray(function (err, result) {
        if (err) {
          res.json(err)
        }
        _.forEach(result, function (value) {
          value.topicTypeText = _.find(dict.topicType, {'value': value.topicType}).text
        })
        res.json(result)
      })
    }
  })

  router.get('/topic/count', function (req, res, next) {
    dbs.xuanm.collection('topics').count(function (err, result) {
      if (err) {
        res.json(err)
      }
      res.json(result)
    })
  })

  router.get('/topic/:_id', function (req, res, next) {
    dbs.xuanm.collection('topics').findOne({_id: new mongo.ObjectID(req.params._id)}, function (err, result) {
      if (err) {
        res.json(err)
      }
      res.json(result)
    })
  })

  router.post('/topic', function (req, res, next) {
    const topic = req.body
    topic.createDate = moment().format('YYYY-MM-DD hh:mm:ss')
    dbs.xuanm.collection('topics').insertOne(topic, (err, r) => {
      if (err) {
        res.json(err)
      }
      res.json(r.result)
    })
  })

  router.put('/topic', function (req, res, next) {
    const topic = req.body
    dbs.xuanm.collection('topics').updateOne({_id: new mongo.ObjectID(topic._id)},
      {
        $set: {
          title: topic.title,
          coverImg: topic.coverImg,
          content: topic.content,
          topicType: topic.topicType
        }
      },
      (err, r) => {
        if (err) {
          res.json(err)
        }
        res.json(r.result)
      })
  })

  router.delete('/topic/:_id', function (req, res, next) {
    dbs.xuanm.collection('topics').deleteOne({_id: new mongo.ObjectID(req.params._id)}, function (err, result) {
      if (err) {
        res.json(err)
      }
      res.json(result)
    })
  })
  return router
}
