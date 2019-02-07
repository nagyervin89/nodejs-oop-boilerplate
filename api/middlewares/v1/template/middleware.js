/**
 * @author Nagy Ervin <nagy.ervin@innoweb.ro>
 */

import jwt from 'jsonwebtoken'
import config from 'config'

export default class Middleware {
    constructor() {
        this.jwt = jwt
        this.config = config
    }
}