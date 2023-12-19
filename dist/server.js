"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const firestore_1 = require("firebase-admin/firestore");
// import admin from './config/database'
const routes_1 = __importDefault(require("./routes/routes"));
(0, dotenv_1.config)();
const db = (0, firestore_1.getFirestore)();
const app = (0, express_1.default)();
const port = isNaN(Number(process.env.PORT)) ? 3000 : Number(process.env.PORT);
try {
    const testDoc = db.collection('test').doc('testDoc').get();
    if (testDoc !== null) {
        console.log('Connected to Firestore');
    }
    else {
        console.log('Error: Unable to connect to Firestore');
    }
}
catch (error) {
    console.log('Error checking Firestore connection: ', error);
}
app.use((0, cors_1.default)({ credentials: true }));
app.use(express_1.default.json());
app.use(routes_1.default);
// console.log('SECRET_TOKEN_ACCESS:', process.env.SECRET_TOKEN_ACCESS)
// console.log('PORT:', process.env.PORT)
// console.log('URL:', process.env.FIREBASE_DATABASE_URL)
// console.log('PORT:', process.env.FIREBASE_SERVICE_ACCOUNT)
app.listen(port, '0.0.0.0', () => {
    console.log(`[server]: Listening on port ${port}`);
});
//# sourceMappingURL=server.js.map