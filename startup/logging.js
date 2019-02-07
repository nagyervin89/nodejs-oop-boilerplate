const winston = require('winston')
require('express-async-errors')

module.exports = () => {
  if (process.env.NODE_ENV !== 'production') {
    winston.add(new winston.transports.Console({
      format: winston.format.simple()
    }))
  }
}