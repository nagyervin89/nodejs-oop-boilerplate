import BaseModel from './template/model'

export default class User extends BaseModel {
  constructor() {
    super()
  }

  generateAuthToken(payload) {
    return this.jwt.sign(payload, this.config.get('jwtPrivateKey'))
  }
}