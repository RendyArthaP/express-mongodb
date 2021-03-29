const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config')

const verifyToken = (req, res, next) => {
  const header = req.headers.authorization
  if(!header) {
    res.status(500).json({
      message: "Invalid header, input token first"
    })
  }

  const token = header.split(" ")[1]
  if(!token) {
    res.status(500).json({
      message: "Invalid token"
    })
  }

  const payload = jwt.verify(token, JWT_KEY)
  req.payload = payload

  next()
}

module.exports = verifyToken