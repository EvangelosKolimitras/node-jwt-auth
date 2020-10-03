"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, res) => {
    // Goes to client
    if (err.isOperational) {
        res.statusCode(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    }
    else {
        // Stays internaly to the developer for debugging
        console.error(`ERROR 💣 `, err);
        res.status(500).json({
            status: "Error",
            message: "Something went wrong"
        });
    }
};
//# sourceMappingURL=prodError.js.map