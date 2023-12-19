"use strict";
// import { type Request, type Response } from 'express'
// import db from '../../config/database'
// interface Outcome {
//   // Define your Outcome model fields here
//   // For example:
//   userId: string
//   amount: number
//   // ...
// }
// const controller = {
//   getArticleCategory: async (req: Request, res: Response) => {
//     try {
//       const topicId = req.body
//       const topicCollection = db.collection('articles')
//       const querySnapshot = await topicCollection.where('topicId', '==', topicId).get()
//       // Extract data from the query snapshot
//       const outcomes: Outcome[] = []
//       querySnapshot.forEach((doc) => {
//         const outcomeData = doc.data() as Outcome
//         outcomes.push({
//           topicId: doc.id,
//           ...outcomeData
//         })
//       })
//       res.status(200).json(outcomes)
//     } catch (error) {
//       console.error(error)
//       res.status(500).json({
//         status: 'fail',
//         message: 'Gagal mendapatkan transaksi'
//       })
//     }
//   }
// }
//# sourceMappingURL=ArticleControllers.js.map