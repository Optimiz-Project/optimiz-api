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
    Register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body);
        const user = {
            email: req.body.email,
            password: req.body.password,
            confPassword: req.body.confPassword,
            name: req.body.name
        };
        if (user.password !== user.confPassword) {
            return res.status(400).json({
                status: 'failed',
                message: 'Password tidak cocok'
            });
        }
        yield firebase_1.default.auth().createUser({
            email: user.email,
            password: user.password,
            displayName: user.name,
            emailVerified: true,
            disabled: false
        })
            .then((userRecord) => {
            res.status(201).json(`Successfully created new user: ${userRecord.uid}`);
        })
            .catch((error) => {
            res.status(500).json(error);
        });
    })
};
exports.default = controller;
//# sourceMappingURL=RegisterControllers.js.map