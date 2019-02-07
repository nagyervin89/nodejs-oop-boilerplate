const request = require('supertest')
const server = require('../../../../app');


describe('Test device type middleware', () => {
	let deviceToken = ''
	let endpoint = ''
	beforeEach(() => {

	})
	afterEach(() => {})

	const exec = () => {
		return request(server).post(endpoint)
			.send({})
			.set('x-user-device-type', deviceToken)
	}

	it('Should decline request with status code 400 because x-user-device-type header is not provided', async () => {
		endpoint = '/v1/auth/login'
		const response = await exec()
		expect(response.status).toBe(400)
	})

	it('Should accept request with status code 200 because x-user-device-type header is provided', async () => {
		endpoint = '/v1/auth/login'
		deviceToken = 'IOS'
		const response = await exec()
		expect(response.status).toBe(200)
	})

})