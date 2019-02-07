/**
 * @description
 */
import Middleware from './template/middleware'

export default class TokenExpired extends Middleware {

	constructor() {
		super()
	}

	/**
	 * Handle login request, generate jwt send it back to client
	 * 
	 * @author Nagy Ervin <nagy.ervin[at]innoweb.ro>
	 * @param  {} req
	 * @param  {} res
	 * @param  {} next
	 * 
	 * @returns 400 if no currentuser found
	 * @returns 200 if jwt has been generated successfully
	 * 
	 */
	checkTokenExpiry = (req, res, next) => {
		const token = req.header('x-auth-token')
		if (!token) next()
		try {
			const payload = this.jwt.verify(token, this.config.get('jwtPrivateKey'))
			let diff = new Date().getTime() - payload.iat
			if (Math.floor((diff % 86400000) / 3600000) > this.config.get('jwtExpiryHours')) {
				return res.status(400).send('Token has expired.')
			}
			next()
		} catch (ex) {
			next()
		}
	}
}