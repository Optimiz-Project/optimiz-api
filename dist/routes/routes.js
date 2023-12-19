"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../controllers/index"));
// import verifyToken from '../middleware/verifyToken.js'
const route = '/api';
const router = express_1.default.Router();
router.get('/', index_1.default.run.run);
// router.get('/check-db', )
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post(`${route}/users`, index_1.default.reg.register);
exports.default = router;
//# sourceMappingURL=routes.js.map