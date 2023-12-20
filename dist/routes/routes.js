"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../controllers/index"));
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const route = '/api';
const router = express_1.default.Router();
router.get('/', index_1.default.run.run);
// Authentication routes
router.post(`${route}/users`, index_1.default.reg.Register);
router.patch(`${route}/forgotPassword`, index_1.default.user.forgotPassword);
// Article routes
router.get(`${route}/articles/:topic`, verifyToken_1.default, index_1.default.articles.getArticles);
router.get(`${route}/articles/:topic/:articleId`, index_1.default.articles.getArticleById);
router.get(`${route}/articles?:search`, index_1.default.articles.searchArticle);
// Materi routes
router.get(`${route}/materials`, index_1.default.materi.getMateriCollection);
router.get(`${route}/materials/:materiId`, index_1.default.materi.getMateri);
exports.default = router;
//# sourceMappingURL=routes.js.map