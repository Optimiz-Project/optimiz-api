"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
const database_cjs_1 = __importDefault(require("../config/database.cjs"));
const controller = {};
controller.Register = async (req, res) => {
    const { username, email, password, confPassword } = req.body;
    if (password !== confPassword) {
        return res.status(400).json({
            status: 'failed',
            message: 'Password tidak cocok',
        });
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        const existingNameUser = await database_cjs_1.default.collection('Users').where('username' == username).get();
        if (!existingNameUser.empty) {
            return res.status(400).json({
                status: 'fail',
                message: 'Username sudah terdaftar',
            });
        }
        await database_cjs_1.default.collection('Users').add({
            username: username,
            email: email,
            password: hashPassword,
        });
        res.json({
            status: 'success',
            message: 'Registrasi berhasil',
        });
    }
    catch (error) {
        console.error('Error during registration: ', error);
        res.status(500).json({
            status: 'fail',
            message: 'Terjadi kesalahan',
            error: error.message,
        });
    }
    ;
};
exports.default = controller;
//# sourceMappingURL=RegisterControllers.js.map