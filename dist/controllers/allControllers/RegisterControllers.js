"use strict";
// import { type Request, type Response } from 'express'
// import * as bcrypt from 'bcrypt'
// import db from '../../config/database'
// const controller = {
//   register: async (req: Request, res: Response) => {
//     console.log(req.body)
//     // const { username, email, password, confPassword } = req.body
//     // if (password !== confPassword) {
//     //   return res.status(400).json({
//     //     status: 'failed',
//     //     message: 'Password tidak cocok'
//     //   })
//     // }
//     const user = {
//       email: req.body.email,
//       password: req.body.password
//     }
//     const userResponse = await FirestoreAdminClient.a
//     const salt = await bcrypt.genSalt(10)
//     const hashPassword = await bcrypt.hash('password', salt)
//     console.log(hashPassword)
//     try {
//       const existingNameUser = await db.collection('Users').where('username', '==', username).get()
//       console.log(existingNameUser)
//       if (existingNameUser.docs !== null) {
//         res.status(400).json({
//           status: 'fail',
//           message: 'Username sudah terdaftar'
//         })
//       }
//       await db.collection('Users').add({
//         username,
//         email,
//         password: hashPassword
//       })
//       res.json({
//         status: 'success',
//         message: 'Registrasi berhasil'
//       })
//     } catch (error: any) {
//       console.error('Error during registration: ', error)
//       res.status(500).json({
//         status: 'fail',
//         message: 'Terjadi kesalahan',
//         error: error.message
//       })
//     };
//   }
// }
// export default controller
//# sourceMappingURL=RegisterControllers.js.map