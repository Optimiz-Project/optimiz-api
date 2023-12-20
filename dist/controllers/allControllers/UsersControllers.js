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
const controller = {
    forgotPassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, newPassword, confPassword } = req.body;
        console.log(req.body);
        if (email == null || newPassword == null || confPassword == null) {
            res.status(401).json({
                status: 'failed',
                message: 'Harap isi semua field'
            });
        }
        try {
            const userRecord = yield firebase_1.default.auth().getUserByEmail(String(email));
            if (userRecord == null) {
                res.status(401).json({
                    status: 'failed',
                    message: 'email invalid'
                });
            }
            if (newPassword !== confPassword) {
                res.status(400).json({
                    status: 'failed',
                    message: 'password harus sama'
                });
            }
            const uid = userRecord.uid;
            console.log(uid);
            yield firebase_1.default.auth().updateUser(uid, {
                password: newPassword
            }).then((userChange) => {
                res.status(201).json('Berhasil ubah password');
            }).catch((error) => {
                res.status(401).json(error);
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    })
};
exports.default = controller;
//# sourceMappingURL=UsersControllers.js.map