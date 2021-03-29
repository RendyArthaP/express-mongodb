const { MONGODB_LIVE, PORT, JWT_KEY } = require('./environment')
const dbConfigMongo = require('./db')

module.exports = {
  MONGODB_LIVE,
  PORT,
  dbConfigMongo,
  JWT_KEY
}