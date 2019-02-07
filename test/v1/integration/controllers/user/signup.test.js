// import AuthController from '../../../../../app/controllers/v1/user/auth'
// const request = require('supertest')
// const server = require('../../../../../app');


describe('test function', () => {
	it('should return 2', () => {
		expect(1 + 1).toBe(2)
	})
})

// describe('greet function', () => {
//     it('should return the greeting message', () => {
//         const result = Signup.greet('Ervin')
//         expect(result).toMatch(/Ervin/)
//         expect(result).toContain('Ervin')
//     })
// })

// describe('getcurrencis function', () => {
//     it('should return supported currencies', () => {
//         const result = Signup.getCurrencies()
//         expect(result).toEqual(expect.arrayContaining(['USD', 'CHF', 'EUR']))
//     })
// })

// describe('login function', () => {
//     it('should return supported currencies', () => {
//         const result = Signup.getCurrencies()
//         expect(result).toEqual(expect.arrayContaining(['USD', 'CHF', 'EUR']))
//     })
// })

// describe('loggedIn', () => {
//     it('should return the current user with id, email', () => {
//         const result = Auth.loggedIn()
//         expect(result).toMatchObject({id: 1, email: 'codervin89@gmail.com'})
//         expect(result).toHaveProperty('id', 1)
//     })
// })

// describe('register', () => {
//     it('should return the current user object with id and username', () => {
//         const result = Auth.register('Ervin')
//         expect(result).toMatchObject({username: 'Ervin'})
//         expect(result.id).toBeGreaterThan(0)
//     })

//     it('should throw the error message if username is falsy', () => {
//         const args = [null, undefined, '', NaN, 0, false]
//         args.forEach(a => {
//             expect(() => { Auth.register(a) }).toThrow()
//         })        
//     })
// })