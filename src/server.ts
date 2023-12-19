import express, { type Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import admin from './config/firebase'
import router from './routes/routes'

dotenv.config()
const db = admin.firestore()

const app: Application = express()
const port: number = isNaN(Number(process.env.PORT)) ? 3000 : Number(process.env.PORT)

try {
  const testDoc = db.collection('test').doc('testDoc').get()
  if (testDoc !== null) {
    console.log('Connected to Firebase')
  } else {
    console.log('Error: Unable to connect to Firebase')
  }
} catch (error: any) {
  console.log('Error checking Firebase connection: ', error)
}

app.use(cors({ credentials: true }))
app.use(express.json())
app.use(router)

app.listen(port, '0.0.0.0', () => {
  console.log(`[server]: Listening on port ${port}`)
})
