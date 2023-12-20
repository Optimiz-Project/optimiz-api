import express, { type Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import admin from './config/firebase'
import router from './routes/routes'

dotenv.config()

const app: Express = express()
const port: number = isNaN(Number(process.env.PORT)) ? 3000 : Number(process.env.PORT)

const db = admin.firestore()

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
