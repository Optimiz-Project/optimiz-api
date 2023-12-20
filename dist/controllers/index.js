"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiRun_1 = __importDefault(require("./allControllers/ApiRun"));
const RegisterControllers_1 = __importDefault(require("./allControllers/RegisterControllers"));
// import Login from './allControllers/LoginControllers'
const UsersControllers_1 = __importDefault(require("./allControllers/UsersControllers"));
const ArticlesControllers_1 = __importDefault(require("./allControllers/ArticlesControllers"));
const MaterialsControllers_1 = __importDefault(require("./allControllers/MaterialsControllers"));
const controller = {
    run: ApiRun_1.default,
    reg: RegisterControllers_1.default,
    // access: Login,
    user: UsersControllers_1.default,
    articles: ArticlesControllers_1.default,
    materi: MaterialsControllers_1.default
};
exports.default = controller;
//# sourceMappingURL=index.js.map