const compression = require("compression")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require('body-parser')

module.exports = (app, globalConfig) => {

  app.use(bodyParser.json({
    type: () => {
      return true
    }
  }))
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(helmet())
  if (app.get('env') === 'development') {
    console.log('Morgan logger enabled...')
    app.use(morgan('tiny'))
  }
  app.use(compression())
  app.use(cors({
    origin: [globalConfig.method + '://' + globalConfig.apiDomain + ':' + globalConfig.port],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }))

  require('./config')()
  require('./process')()
  require('./swagger')(app, globalConfig)
  require('./logging')()

  app.use(require('./router'))

}