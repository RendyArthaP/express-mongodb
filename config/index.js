const { MONGODB_LIVE, PORT } = require('./environment')
const dbConfigMongo = require('./db')

module.exports = {
  MONGODB_LIVE,
  PORT,
  dbConfigMongo
}