/**
 * @author Nagy Ervin
 */
import underscore from 'underscore'
import validator from 'joi'
import lodash from 'lodash'
import jwt from 'jsonwebtoken'
import config from 'config'

// const Sequelize = require('sequelize')
// const sequelize = require('../../../config/database/sequelizedb')

export default class BaseModel {
	constructor() {
		// this.sequelize = sequelize
		// this.Sequelize = Sequelize
		this.validator = validator
		this.jwt = jwt
		this.underscore = underscore
		this._ = lodash
		this.config = config
	}

	executeRawSQL(sql) {
		return this.sequelize.query(sql, {
			type: this.Sequelize.QueryTypes.SELECT
		})
	}
}