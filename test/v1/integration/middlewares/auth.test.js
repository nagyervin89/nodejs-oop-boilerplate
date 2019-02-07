const request = require('supertest')
const server = require('../../../../app');
import User from '../../../../api/models/user'

describe('Test auth middleware', () => {
	let deviceToken = ''
	let jwt = ''
	let endpoint = ''
	beforeEach(() => {

	})
	afterEach(() => { })

	const exec = () => {
		const header = {
			"x-user-device-type": deviceToken,
			"x-auth-token": jwt
		}

		return request(server).post(endpoint)
			.set(header)
	}

	it('Should decline request with status code 400 because x-auth-token header is invalid', async () => {
		deviceToken = 'Desktop'
		jwt = '12345'
		endpoint = '/v1/auth/logout'
		const response = await exec()
		expect(response.status).toBe(401)
	})

	it('Should accpet request with status code 200 because x-auth-token header is provided and valid', async () => {
		deviceToken = 'Desktop'
		endpoint = '/v1/auth/logout'
		const user = new User()
		jwt = await user.generateAuthToken({
			id: 1,
			email: 'youremail@gmail.com'
		})
		const response = await exec()
		expect(response.status).toBe(200)
	})

})