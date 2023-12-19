"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import run from './allControllers/ApiRun.ts'; // Assuming it's a TypeScript file
const ApiRun_1 = __importDefault(require("./allControllers/ApiRun")); // Import the correct file extension
const RegisterControllers_1 = __importDefault(require("./allControllers/RegisterControllers"));
const controller = {
    run: ApiRun_1.default,
    reg: RegisterControllers_1.default
};
exports.default = controller;
//# sourceMappingURL=index.js.map