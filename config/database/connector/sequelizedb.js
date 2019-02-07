/**
 * @author Nagy Ervin <nagy.ervin@innoweb.ro>
 */
const config = require('config')
const Sequelize = require('sequelize')
const environment = config.get('environment')

switch(environment) {
  case 'dev':
    const credentialFile = './development'
  case 'prod':
    const credentialFile = './production'
  case 'test':
    const credentialFile = './test'
  case 'staging':
    const credentialFile = './staging'
  default:
    const credentialFile = './development'
}

const credentials = require(credentialFile)

const connection = new Sequelize(
  credentials.default.database.name, 
  credentials.default.database.user, 
  credentials.default.database.password, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

module.exports = connection