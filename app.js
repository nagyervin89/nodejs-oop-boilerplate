'use strict';
require('dotenv').config()

const SwaggerExpress = require('swagger-express-mw'),
  express = require('express'),
  app = express(),
  path = require("path"),
  port = process.env.PORT || 8181

const globalConfig = {
  appRoot: __dirname,
  apiDomain: process.env.DOMAIN || "localhost",
  method: process.env.METHOD || "http",
  port: process.env.PORT || 8181, // set 8000 for default port
  swaggerFile: path.join(__dirname, '/swagger/swagger.json')
};

require('./startup/index')(app, globalConfig)

if (process.env.NODE_ENV !== 'testing') {
  SwaggerExpress.create(globalConfig, (err, swaggerExpress) => {
    swaggerExpress.register(app)
    if (err) {
      console.log(err)
      throw err;
    }
    app.listen(port);
  });
}

module.exports = app