"use strict";
// import jwt from 'jsonwebtoken'
// import { type Request, type Response, type NextFunction } from 'express'
// import dotenv from 'dotenv'
// dotenv.config()
// // declare global {
// //   namespace Express {
// //     interface Request {
// //       name?: string
// //       userId?: string
// //       // Add other custom properties if needed
// //     }
// //   }
// // }
// const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.headers.authorization
//   if (authHeader == null) {
//     res.status(403).json({ error: 'No token provided' })
//   }
//   const token: string | undefined = authHeader.split(' ')[1]
//   if (token == null) {
//     res.status(403).json({ error: 'No token provided' })
//   }
//   const secretKey: jwt.Secret = process.env.SECRET_TOKEN_ACCESS as jwt.Secret
//   jwt.verify(token, secretKey, (err: jwt.JsonWebTokenError | null, decoded: any) => {
//     if (err == null) {
//       return res.status(500).json({ error: 'Failed to authenticate token' })
//     }
//     req.name = decoded.name
//     req.userId = decoded.userId
//     next()
//   })
// }
// export default verifyToken
//# sourceMappingURL=verifyToken.js.map