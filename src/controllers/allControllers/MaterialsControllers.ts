import { type Request, type Response } from 'express'
import admin from '../../config/firebase'

const db = admin.firestore()

const controller = {
  getMateriCollection: async (req: Request, res: Response) => {
    try {
      const articleCollection = db.collection('materials')
      const articleSnapshot = await articleCollection
        .get()
      if (articleSnapshot.empty) {
        return res.status(404).json({ message: 'Data artikel kosong' })
      }
      const articleData: admin.firestore.DocumentData[] = []
      // Extract data from the query snapshot
      articleSnapshot.forEach((doc) => {
        articleData.push(doc.data())
      })
      res.status(200).json(articleData)
    } catch (error) {
      res.status(500).json({
        status: 'failed',
        message: 'Gagal mendapatkan data artikel'
      })
    }
  },

  getMateri: async (req: Request, res: Response) => {
    try {
      const materiId = req.params.materiId
      const articleCollection = db.collection('materials')
      const articleSnapshot = await articleCollection
        .where('id', '==', materiId)
        .get()
      if (articleSnapshot.empty) {
        return res.status(404).json({ message: 'Data artikel kosong' })
      }
      const articleData: admin.firestore.DocumentData[] = []
      // Extract data from the query snapshot
      articleSnapshot.forEach((doc) => {
        articleData.push(doc.data())
      })
      res.status(200).json(articleData)
    } catch (error) {
      console.error(error)
      res.status(500).json({
        status: 'failed',
        message: 'Gagal mendapatkan data artikel'
      })
    }
  }

}

export default controller
