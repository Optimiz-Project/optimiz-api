import run from './allControllers/ApiRun'
import Register from './allControllers/RegisterControllers'
import user from './allControllers/UsersControllers'
import Articles from './allControllers/ArticlesControllers'
import Materials from './allControllers/MaterialsControllers'

interface Controller {
  run: typeof run
  reg: typeof Register
  // access: typeof Login
  user: typeof user
  articles: typeof Articles
  materi: typeof Materials
}

const controller: Controller = {
  run,
  reg: Register,
  // access: Login,
  user,
  articles: Articles,
  materi: Materials
}

export default controller
