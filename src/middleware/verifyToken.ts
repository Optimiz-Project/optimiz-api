import { type Request, type Response, type NextFunction } from 'express'
import admin from '../config/firebase'

// Extend the Request type to include the 'user' property
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: admin.auth.DecodedIdToken
    }
  }
}

const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const idToken = req.headers.authorization
  if (idToken == null) {
    return res.sendStatus(403)
  }
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken)
    req.user = decodedToken
    next()
  } catch (error) {
    res.sendStatus(401)
  }
}

export default verifyToken
