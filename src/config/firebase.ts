import admin from 'firebase-admin'
import { type ServiceAccount } from 'firebase-admin/app'
import * as serviceAccount from './ServiceAccountKey.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount)
})

export default admin
