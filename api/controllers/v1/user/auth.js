/**
 * @description
 */
import BaseController from '../template/controller'

export default class AuthController extends BaseController {

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
	login = (req, res, next) => {
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
	 * Handle logout request, put current jwt into blacklist (softdelete)
	 * 
	 * @author Nagy Ervin <nagy.ervin@innoweb.ro>
	 * @param  {} req
	 * @param  {} res
	 * @param  {} next
	 * 
	 * @returns 400 if no currentuser found
	 * @returns 200 if jwt has been blacklisted successfully
	 */
	logout = (req, res, next) => {
		if (!req.currentUser) res.status(400).send('No current user found.')
		else res.status(200).send('User logged out.')
	}

}