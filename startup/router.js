//import global middlewares
import ErrorHandler from '../api/middlewares/error'
import NotFoundHandler from '../api/middlewares/notfound'
import CrossRequest from '../api/middlewares/v1/crossRequest'
import Device from '../api/middlewares/v1/device'


//import custom middlewares
import userRouter from '../api/controllers/v1/user/routes'

const CrossRequestMdl = new CrossRequest()
const DeviceMdl = new Device()
const ErrorHandlerMdl = new ErrorHandler()
const NotFoundHandlerMdl = new NotFoundHandler()


module.exports = [
  //before route middlewares
  CrossRequestMdl.setCrossHeader,
  DeviceMdl.checkDeviceToken,

  //custom middlewares
  userRouter,

  //after route middlewares 
  NotFoundHandlerMdl.handle,
  ErrorHandlerMdl.handle
]