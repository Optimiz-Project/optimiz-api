// import { type Request, type Response } from 'express'
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import app from '../../config/firebaseClient'

// const controller = {
//   Login: async (req: Request, res: Response) => {
//     const user = {
//       email: req.body.email,
//       password: req.body.password
//     }

//     if (user.email === '') {
//       res.status(400).json({
//         status: 'failed',
//         message: 'Mohon masukkan email Anda'
//       })
//     }

//     const auth = getAuth(app)
//     signInWithEmailAndPassword(auth, String(user.email), String(user.password))
//       .then((user) => {
//         return user.getIdToken().then(idT)
//         // Signed in
//         const csrfToken = getCookie('csrfToken')
//         return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken)
//         console.log('Successfully signed in:', user.uid)
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code
//         const errorMessage = error.message
//         console.error('Authentication error:', errorCode, errorMessage)
//       })

//     // await admin.auth().getUserByEmail(String(user.email))
//     //   .then((userRecord) => {
//     //     const userId = userRecord.uid
//     //     const password = userRecord.passwordHash
//     //     if (user)
//     //   })
//     //   .catch((error) => {
//     //     res.status(500).json(error)
//     //   })
//   }

// //   Logout: async (req: Request, res: Response) => {
// //     const userLogout = await admin.auth()
// //       .then(() => {
// //         console.log('user signout')
// //       })
// //   }
// }

// export default controller
// function postIdTokenToSessionLogin(arg0: string, idToken: any, csrfToken: any): any {
//   throw new Error('Function not implemented.')
// }

// function getCookie(arg0: string) {
//   throw new Error('Function not implemented.')
// }
