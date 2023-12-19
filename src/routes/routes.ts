/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import controller from '../controllers/index'
// import verifyToken from '../middleware/verifyToken.js'

const route = '/api'

const router = express.Router()
router.get('/', controller.run.run)

// Authentication routes
router.post(`${route}/users`, controller.reg.Register)
// router.post(`${route}/login`, controller.access.Login)
router.patch(`${route}/forgotPassword`, controller.user.forgotPassword)

router.get(`${route}/articles/:topicId`, controller.articles.getArticles)
router.get(`${route}/articles/:topicId/:id`, controller.articles.getArticleById)
/*
    routenya jadi konflik sama getArticles
*/
// router.get(`${route}/articles/:topicId?`, controller.articles.searchArticle)

export default router
