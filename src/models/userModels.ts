import { type firestore } from 'firebase-admin'
import 'firebase/firestore'

interface User {
  id: string
  username: string
  email: string
  fullName: string
  password: string
  refreshToken: Text
  birthDate: Date
  gender: string
  createdAt: firestore.FieldValue
}

interface Article {
  id: string
  title: string
  body: string
  addedAt: firestore.FieldValue
}

export type { User, Article }
