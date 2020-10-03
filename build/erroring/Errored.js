"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Errored extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statuCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperrational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = Errored;
//# sourceMappingURL=Errored.js.map