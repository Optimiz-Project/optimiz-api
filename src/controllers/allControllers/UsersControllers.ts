import { type Request, type Response } from 'express'
import admin from '../../config/firebase'

const controller = {
  forgotPassword: async (req: Request, res: Response) => {
    const { email, newPassword, confPassword } = req.body
    console.log(req.body)
    if (email == null || newPassword == null || confPassword == null) {
      return res.status(401).json({
        status: 'failed',
        message: 'Harap isi semua field'
      })
    }
    try {
      const userRecord = await admin.auth().getUserByEmail(String(email))
      if (userRecord == null) {
        return res.status(401).json({
          status: 'failed',
          message: 'Email tidak valid'
        })
      }
      if (newPassword !== confPassword) {
        return res.status(400).json({
          status: 'failed',
          message: 'Password tidak cocok'
        })
      }
      const uid = userRecord.uid
      console.log(uid)
      await admin.auth().updateUser(uid, {
        password: newPassword
      }).then((userChange) => {
        res.status(201).json('Berhasil ubah password')
      }).catch((error) => {
        res.status(401).json(error)
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default controller
