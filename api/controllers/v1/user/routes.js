/**
 * @description
 */
//Load Express & Router
const userRouter = require('express').Router()

//Load controllers
import AuthController from './auth'

//Load middlewares
import Auth from '../../../middlewares/v1/auth'
import TokenExpired from '../../../middlewares/v1/tokenexpired'

//Create controller instances
const AuthCtrlInstance = new AuthController()


//Create middleware instances
const AuthMdlInstance = new Auth()
const TokenExpiredMdlInstance = new TokenExpired()


userRouter.post('/v1/auth/login', AuthCtrlInstance.login);
userRouter.post('/v1/auth/logout', [AuthMdlInstance.checkAuth], AuthCtrlInstance.logout);

module.exports = userRouter