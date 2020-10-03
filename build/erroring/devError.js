"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, res) => res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message
});
//# sourceMappingURL=devError.js.map