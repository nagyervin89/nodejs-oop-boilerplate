/**
 * @description
 */
import Middleware from './template/middleware'

export default class crossRequest extends Middleware {

  constructor() {
    super()
  }

  /**
   * @description
   * @author Nagy Ervin
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   * 
   * @retrun next 
   */
  setCrossHeader = (req, res, next) => {
    if (process.env.IS_PRODUCTION == 0) {
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
      next()
    } else {
      next()
    }
  }
}