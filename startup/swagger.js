const swaggerUi = require('swagger-ui-express')

module.exports = (app, globalConfig) => {
  //Load json swagger file
  const swaggerDocument = require(globalConfig.swaggerFile);
  //Load yaml swagger file
  // const swaggerDocument = YAML.load(globalConfig.swaggerFile);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}