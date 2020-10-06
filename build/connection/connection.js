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
exports.connectToClient = exports.createUrlString = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function createUrlString() {
    return process.env.MONGODB_URL
        .replace("_username", process.env.MONGODB_USERNAME)
        .replace("_password", process.env.MONGODB_PASSWORD)
        .replace("_database", process.env.MONGODB_DATABASE);
}
exports.createUrlString = createUrlString;
function connectToClient() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new mongodb_1.MongoClient(createUrlString(), { useUnifiedTopology: true });
        const client = yield server.connect();
        return client;
    });
}
exports.connectToClient = connectToClient;
connectToClient();
function connection() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield connectToClient();
        const database = client.db("rest-db");
        const collection = database.collection("users");
        return { collection };
    });
}
exports.default = connection;
//# sourceMappingURL=connection.js.map