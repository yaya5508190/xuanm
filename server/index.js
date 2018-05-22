import express from 'express'
import {Nuxt, Builder} from 'nuxt'
import initializeDatabases from './utils/dbClient.js'
import session from 'express-session'
import connectMongo from 'connect-mongo'
import api from './api'
import path from 'path'
import moment from 'moment'

const app = express()
const bodyParser = require('body-parser')
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const MongoStore = connectMongo(session)

// Init Database
initializeDatabases().then(dbs => {
  app.set('etag', false)
  // 配置body解析
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  // Sessions 来创建 req.session
  app.use(session({
    secret: 'qwma-pydt-q6vi',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 20 * 60 * 1000 },
    rolling: true,
    store: new MongoStore({
      db: dbs.xuanm,
      ttl: 30 * 60
    })
  }))
  app.set('port', port)
  app.use('/static/images', express.static(path.join(__dirname, '/upload/images'), {
    setHeaders: function (res, path, stat) {
      res.set('Content-Type', 'image/png')
    }
  }))
  app.use(function (req, res, next) {
    console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')} -- [${req.headers['x-forwarded-for'] || req.connection.remoteAddress}]: ${req.path}`)
    if (!req.session.authUser &&
        req.path.indexOf('/api') === 0 &&
        req.path !== '/api/login' &&
        req.path !== '/api/logout' &&
        req.method !== 'GET') {
      res.status(403).json({ error: '禁止访问' })
    } else {
      next()
    }
  })
  // Import API Routes
  app.use('/api', api(dbs))

  // 发起 POST /api/login 请求完成用户登录，并添加该用户到 req.session.authUser
  app.post('/api/login', function (req, res) {
    if (req.body.username === 'superadmin' && req.body.password === 'qwma-pydt-q6vi') {
      req.session.authUser = { username: 'superadmin' }
      return res.json({ username: 'superadmin' })
    }
    res.status(401).json({ error: '用户名密码错误' })
  })

  // 发起 POST /api/logout 请求注销当前用户，并从 req.session 中移除
  app.post('/api/logout', function (req, res) {
    delete req.session.authUser
    res.json({ ok: true })
  })

  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
})
