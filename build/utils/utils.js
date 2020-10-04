"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncErrorController = exports.catchAllRouteErrors = void 0;
const Errored_1 = __importDefault(require("../erroring/Errored"));
function catchAllRouteErrors(req, res, next) {
    next(new Errored_1.default(`Can not find ${req.originalUrl} on the server. Please check again.`, 404));
}
exports.catchAllRouteErrors = catchAllRouteErrors;
function asyncErrorController(asyncFn) {
    return (req, res, next) => asyncFn(req, res, next).catch(next);
}
exports.asyncErrorController = asyncErrorController;
//# sourceMappingURL=utils.js.map