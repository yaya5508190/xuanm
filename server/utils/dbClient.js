const MongoClient = require('mongodb').MongoClient

const XUANM_URI = process.env.DB_URL || 'mongodb://172.16.189.187:27017/xuanm'

function connect (url) {
  return MongoClient.connect(url).then(client => client.db())
}

module.exports = async function () {
  let databases = await Promise.all([connect(XUANM_URI)])

  return {
    xuanm: databases[0]
  }
}
