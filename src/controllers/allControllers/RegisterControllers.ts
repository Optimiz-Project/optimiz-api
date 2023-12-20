import { type Request, type Response } from 'express'
import admin from '../../config/firebase'

const controller = {
  Register: async (req: Request, res: Response) => {
    console.log(req.body)

    const user = {
      email: req.body.email,
      password: req.body.password,
      confPassword: req.body.confPassword,
      name: req.body.name
    }

    if (user.password !== user.confPassword) {
      return res.status(400).json({
        status: 'failed',
        message: 'Password tidak cocok'
      })
    }

    await admin.auth().createUser({
      email: user.email,
      password: user.password,
      displayName: user.name,
      emailVerified: true,
      disabled: false
    })
      .then((userRecord) => {
        res.status(201).json(`Successfully created new user: ${userRecord.uid}`)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  }
}

export default controller
