/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import controller from '../controllers/index'
import verifyToken from '../middleware/verifyToken'

const route = '/api'

const router = express.Router()
router.get('/', controller.run.run)

// Authentication routes
router.post(`${route}/users`, controller.reg.Register)
router.patch(`${route}/forgotPassword`, controller.user.forgotPassword)
// Article routes
router.get(`${route}/articles/:topic`, verifyToken, controller.articles.getArticles)
router.get(`${route}/articles/:topic/:articleId`, controller.articles.getArticleById)
router.get(`${route}/articles?:search`, controller.articles.searchArticle)
// Materi routes
router.get(`${route}/materials`, controller.materi.getMateriCollection)
router.get(`${route}/materials/:materiId`, controller.materi.getMateri)

export default router
