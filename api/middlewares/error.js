/**
 * @description
 */
import {
  createLogger,
  format,
  transports
} from 'winston'

export default class ErrorHandler {

  constructor() {}

  /**
   * @description
   * @author Nagy Ervin <nagy.ervin[at]innoweb.ro>
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   * 
   * @retrun next
   *  
   */
  handle = (err, req, res, next) => {
    const logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
      transports: [
        new transports.File({
          filename: 'error.log',
          level: 'error'
        }),
      ],
      exitOnError: false,
    })
    let reqDetails = this.getRequestDetails(req)
    let logMessage = {
      request: reqDetails,
      message: err.message,
      stack: err.stack
    }

    logger.error(logMessage)
    return res.status(500).send('Internal error.')
  }
  /*
   * Extract and retrive data from req object
   * @author Nagy Ervin <nagy.ervin@innoweb.ro>
   * @param {*} req 
   * 
   * @retrun Object
   *  
   */
  getRequestDetails = (req) => {
    if (!req) return {}
    return {
      body: req.body,
      path: req.path,
      headers: req.headers,
    }
  }
}