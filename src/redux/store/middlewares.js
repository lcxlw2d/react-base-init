import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'

// const loggerMiddleware = Util.isProdEnv()? function(){} : createLogger()

export default applyMiddleware(
  // you can apply you middleware here
  thunkMiddleware,
  // loggerMiddleware
)
