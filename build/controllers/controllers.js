"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const devError_1 = __importDefault(require("../erroring/devError"));
const prodError_1 = __importDefault(require("../erroring/prodError"));
exports.default = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500; /* Default to 500 if code is not defined */
    err.status = err.status || "error";
    // Different errors for different environments
    process.env.NODE_ENV === 'development' && devError_1.default(err, res) || prodError_1.default(err, res);
};
//# sourceMappingURL=controllers.js.map