"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const firebase_1 = __importDefault(require("./config/firebase"));
const routes_1 = __importDefault(require("./routes/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = isNaN(Number(process.env.PORT)) ? 3000 : Number(process.env.PORT);
const db = firebase_1.default.firestore();
try {
    const testDoc = db.collection('test').doc('testDoc').get();
    if (testDoc !== null) {
        console.log('Connected to Firebase');
    }
    else {
        console.log('Error: Unable to connect to Firebase');
    }
}
catch (error) {
    console.log('Error checking Firebase connection: ', error);
}
app.use((0, cors_1.default)({ credentials: true }));
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(port, '0.0.0.0', () => {
    console.log(`[server]: Listening on port ${port}`);
});
//# sourceMappingURL=server.js.map