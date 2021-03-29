const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const header = req.headers.authorization
  if(!header) {
    res.status(500).json({
      message: "Invalid header"
    })
  }

  const token = header.split(" ")[1]
  if(!token) {
    res.status(500).json({
      message: "Invalid token"
    })
  }

  const payload = jwt.verify(token, "kepoyah?hehe")
  req.payload = payload

  next()
}

module.exports = verifyToken