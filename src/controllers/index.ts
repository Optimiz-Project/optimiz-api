import run from './allControllers/ApiRun'
import Register from './allControllers/RegisterControllers'
// import Login from './allControllers/LoginControllers'
import user from './allControllers/UsersControllers'
import articles from './allControllers/ArticlesControllers'

interface Controller {
  run: typeof run
  reg: typeof Register
  // access: typeof Login
  user: typeof user
  articles: typeof articles
}

const controller: Controller = {
  run,
  reg: Register,
  // access: Login,
  user,
  articles
}

export default controller
