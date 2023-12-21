import admin from 'firebase-admin'
import { type ServiceAccount } from 'firebase-admin/app'
import dotenv from 'dotenv'
dotenv.config()

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const serviceAccount: ServiceAccount = JSON.parse(process.env.SECRET_ACCOUNT_KEY!)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export default admin
