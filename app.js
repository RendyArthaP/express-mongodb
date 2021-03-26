const express = require('express');
const { PORT, dbConfigMongo } = require('./config')
const app = express()
const localPort = PORT || 3000
const cors = require('cors')
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, (req, res) => {
  console.log(`Application running at http://localhost:${PORT}`)
})