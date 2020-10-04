"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
const routes_1 = __importDefault(require("./routes/routes"));
const utils_1 = require("./utils/utils");
const controllers_1 = __importDefault(require("./controllers/controllers"));
app
    .use(express_1.default.json())
    .use(routes_1.default)
    .use("*", utils_1.catchAllRouteErrors)
    .use(controllers_1.default)
    .listen(port);
//# sourceMappingURL=app.js.map