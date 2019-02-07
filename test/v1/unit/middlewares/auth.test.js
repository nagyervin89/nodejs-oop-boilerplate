import User from '../../../../api/models/user'
import Auth from '../../../../api/middlewares/v1/auth'

describe('auth middleware', () => {
  it('should set req.currentUser with the payload of a valid JWT', async () => {
    const userModel = new User()
    const authMdl = new Auth()
    const user = {
      id: 1,
      email: 'codervin89@gmail.com'
    }
    const token = await userModel.generateAuthToken(user)
    const req = {
      header: jest.fn().mockReturnValue(token)
    }
    const next = jest.fn()
    const res = {};
    authMdl.checkAuth(req, res, next)
    expect(req.currentUser).toMatchObject(user)
  })
})