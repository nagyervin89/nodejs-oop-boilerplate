/**
 * @description
 */
import Middleware from './template/middleware'

export default class Device extends Middleware {

	constructor() {
		super()
	}

	/**
	 * @description
	 * @author Nagy Ervin <nagy.ervin[at]innoweb.ro>
	 * @param {*} req 
	 * @param {*} res 
	 * @param {*} next 
	 * 
	 * @retrun next 
	 */
	checkDeviceToken = (req, res, next) => {
		const device = req.header('x-user-device-type')
		if (!device) return res.status(400).send('Access denied! No device type header provided. Ex.: desktop, ios, android')
		req.userDevice = device
		next()
	}
}