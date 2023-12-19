import { type Request, type Response } from 'express'
import admin from '../../config/firebase'

const db = admin.firestore()

const controller = {
  getArticles: async (req: Request, res: Response) => {
    const topicId = req.params.topicId
    let topics = ''
    if (topicId === 'topic001') {
      topics = 'motivation'
    } else if (topicId === 'topic002') {
      topics = 'technology'
    } else {
      topics = ''
    }
    try {
      const topicCollection = db.collection('articles').doc(topicId).collection(topics)
      const querySnapshot = await topicCollection.get()
      if (querySnapshot.empty) {
        res.status(404).json('Data artikel kosong')
      }
      const articleDatas: admin.firestore.DocumentData[] = []
      // Extract data from the query snapshot
      querySnapshot.forEach((doc) => {
        articleDatas.push(doc.data())
      })
      res.status(200).json(articleDatas)
    } catch (error) {
      res.status(500).json({
        status: 'fail',
        message: 'Gagal mendapatkan artikel'
      })
    }
  },

  getArticleById: async (req: Request, res: Response) => {
    const topicId = req.params.topicId
    const articleId = req.params.id
    console.log(topicId)
    console.log(articleId)
    let topics = ''
    if (topicId === 'topic001') {
      topics = 'motivation'
    } else if (topicId === 'topic002') {
      topics = 'technology'
    }
    try {
      const article = db.collection('articles').doc(topicId).collection(topics).doc(articleId)
      const articleSnapshot = await article.get()
      if (articleSnapshot.exists) {
        const articleData = articleSnapshot.data()
        res.status(200).json(articleData)
      } else {
        res.status(404).json('Data artikel tidak ditemukan')
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({
        status: 'fail',
        message: 'Gagal mendapatkan artikel'
      })
    }
  },

  searchArticle: async (req: Request, res: Response) => {
    const topicId = req.params.topicId
    const search = req.query.search as string
    console.log(topicId)

    let topics = ''
    if (topicId === 'topic001') {
      topics = 'motivation'
    } else if (topicId === 'topic002') {
      topics = 'technology'
    }

    try {
      const article = db.collection('articles').doc(topicId).collection(topics)
      const articleSnapshot = await article
        .where('author', '>=', search)
        .where('author', '<=', search + '~')
        .limit(10)
        .get()

      if (articleSnapshot.empty) {
        return res.status(404).json({ message: 'Artikel tidak ditemukan' })
      }

      const articleDatas: admin.firestore.DocumentData[] = []
      articleSnapshot.forEach((doc) => {
        articleDatas.push(doc.data())
      })

      res.status(200).json(articleDatas)
    } catch (error) {
      console.error(error)
      res.status(500).json({
        status: 'fail',
        message: 'Gagal mendapatkan artikel'
      })
    }
  }

}

export default controller
