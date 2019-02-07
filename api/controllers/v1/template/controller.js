/**
 * @description
 */

import underscore from 'underscore'
import validator from 'joi'
import lodash from 'lodash'
import jwt from 'jsonwebtoken'
import config from 'config'


/**
 * @class BaseController
 */
export default class BaseController {

	constructor() {
		this.utils = underscore
		this.validator = validator
		this._ = lodash
		this.jwt = jwt
		this.config = config
	}
}