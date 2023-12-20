"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("../../config/firebase"));
const db = firebase_1.default.firestore();
const controller = {
    getArticles: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const topic = req.params.topic;
            const articleCollection = db.collection('articles');
            const articleSnapshot = yield articleCollection
                .where('topic', '==', topic)
                .get();
            if (articleSnapshot.empty) {
                return res.status(404).json({ message: 'Data artikel kosong' });
            }
            const articleData = [];
            // Extract data from the query snapshot
            articleSnapshot.forEach((doc) => {
                articleData.push(doc.data());
            });
            res.status(200).json(articleData);
        }
        catch (error) {
            res.status(500).json({
                status: 'failed',
                message: 'Gagal mendapatkan data artikel'
            });
        }
    }),
    getArticleById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const topic = req.params.topic;
            const articleId = req.params.articleId;
            const articleCollection = db.collection('articles');
            const articleSnapshot = yield articleCollection
                .where('topic', '==', topic)
                .where('id', '==', articleId)
                .get();
            if (articleSnapshot.empty) {
                return res.status(404).json({ message: 'Data artikel kosong' });
            }
            const articleData = [];
            // Extract data from the query snapshot
            articleSnapshot.forEach((doc) => {
                articleData.push(doc.data());
            });
            res.status(200).json(articleData);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'failed',
                message: 'Gagal mendapatkan data artikel'
            });
        }
    }),
    searchArticle: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const search = req.query.search;
            const articleCollection = db.collection('articles');
            const articleSnapshot = yield articleCollection
                .where('title', '>=', search)
                .where('title', '<=', search + '~')
                .limit(10)
                .get();
            if (articleSnapshot.empty) {
                return res.status(404).json({ message: 'Artikel tidak ditemukan' });
            }
            const articleData = [];
            // Extract data from the query snapshot
            articleSnapshot.forEach((doc) => {
                articleData.push(doc.data());
            });
            res.status(200).json(articleData);
        }
        catch (error) {
            res.status(500).json({
                status: 'failed',
                message: 'Gagal mendapatkan data artikel'
            });
        }
    })
};
exports.default = controller;
//# sourceMappingURL=ArticlesControllers.js.map