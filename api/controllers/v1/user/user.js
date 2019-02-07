/**
 * @description
 */
import BaseController from '../template/controller'

export default class UserController extends BaseController {

  constructor() {
    super()
  }

  /**
   * Handle signup request, insert user into DB 
   * retrive jwt to client
   * 
   * @author Nagy Ervin
   * @param  {} req
   * @param  {} res
   * @param  {} next
   * 
   * @returns 200 if user saved and jwt has been generated successfully
   */
  create = (req, res, next) => {
    if (req.currentUser) res.status(400).send()
    const token = this.jwt.sign({
      id: 1,
      email: 'codervin89@gmail.com'
    }, this.config.get('jwtPrivateKey'))
    res.header('x-auth-token', token).status(200).send({
      id: 1,
      email: 'codervin89@gmail.com'
    })
  }


  /**
   * Change user's password
   * 
   * @author Nagy Ervin
   * @param  {} req
   * @param  {} res
   * @param  {} next
   * 
   * @returns 200 
   */
  changepassword = (req, res, next) => {

  }

  /**
   * Generate password change request token
   * 
   * @author Nagy Ervin
   * @param  {} req
   * @param  {} res
   * @param  {} next
   * 
   * @returns 200 
   */
  requestpasswordchangetoken = (req, res, next) => {

  }

}