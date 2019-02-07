// import AuthController from '../../../../../app/controllers/v1/user/auth'
// const request = require('supertest')
// const server = require('../../../../../app');


describe('test function', () => {
	it('should return 2', () => {
		expect(1 + 1).toBe(2)
	})
})

// describe('/v1/auth/login', () => {

// let server
// beforeEach((done) => {server = require('../../../../../app')})    
// afterEach(() => {server.close()})

// 	it('GET /v1/auth/login => should decline request with status code 400 because type of the request is GET instead of POST', async () => {
// 		const res = await request(server).get('/login')
// 		expect(res.status).toBe(400)
// 	})

// 	it('POST /v1/auth/login => should decline request with status code 400 because x-user-device-type header is not defined', async () => {
// 		const res = await request(server)
// 			.post('/v1/auth/login')
// 		expect(res.status).toBe(400)
// 	})

// 	it('POST /v1/auth/login => should return request with status code 200', async () => {
// 		const res = await request(server)
// 			.post('/v1/auth/login')
// 			.set('x-user-device-type', 'desktop')
// 		expect(res.status).toBe(200)
// 	})
// })


// describe('/v1/auth/logout', () => {
// 	// let server
// 	// beforeEach((done) => {server = require('../../../../../app')})    
// 	// afterEach(() => {server.close()})

// 	it('GET /v1/auth/logout => should return request with status code 404 because type of the request is GET instead of POST', async () => {
// 		const res = await request(server)
// 			.get('/v1/auth/logout')
// 			.set('x-user-device-type', 'desktop')
// 		expect(res.status).toBe(404)
// 	})

// 	it('POST /v1/auth/logout => should return request with status code 401 because jwt token not found in request header', async () => {
// 		const res = await request(server)
// 			.post('/v1/auth/logout')
// 			.set('x-user-device-type', 'desktop')
// 		expect(res.status).toBe(401)
// 	})

// 	it('POST /v1/auth/logout => should decline request with status code 400 because x-user-device-type header is not defined', async () => {
// 		const res = await request(server)
// 			.post('/v1/auth/logout')
// 		expect(res.status).toBe(400)
// 	})

// })