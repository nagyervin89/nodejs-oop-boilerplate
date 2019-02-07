/**
 * @description
 */
export default class NotFoundHandler {

	constructor() {}

	/**
	 * Handle 404 requests
	 * @author Nagy Ervin <nagy.ervin[at]innoweb.ro>
	 * @param {*} req 
	 * @param {*} res 
	 * @param {*} next 
	 * 
	 * @retrun next 
	 */
	handle = (req, res, next) => {
		return res.status(404).send({
			error: true,
			message: 'Not found'
		})
	}
}