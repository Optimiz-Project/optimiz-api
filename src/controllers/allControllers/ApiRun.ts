import { type Request, type Response } from 'express'

const controller = {
  run: (req: Request, res: Response) => {
    res.send('API is running')
  }
}

export default controller
