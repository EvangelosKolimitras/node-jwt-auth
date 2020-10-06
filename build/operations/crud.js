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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const utils_1 = require("../utils/utils");
const connection_1 = __importDefault(require("../connection/connection"));
const mongodb_1 = require("mongodb");
exports.getUsers = utils_1.asyncErrorController((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { collection } = yield connection_1.default();
    const pipeline = [{ '$match': {} }];
    res.status(200).json({
        users: yield collection.aggregate(pipeline).toArray()
    });
}));
exports.getUser = utils_1.asyncErrorController((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { collection } = yield connection_1.default();
    const query = { _id: new mongodb_1.ObjectId(req.params.id) };
    try {
        res
            .status(200)
            .json({ users: yield collection.findOne(query) });
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
exports.createUser = utils_1.asyncErrorController((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { collection } = yield connection_1.default();
    try {
        res
            .status(201)
            .json({
            user: yield collection.insertOne(req.body)
        });
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
exports.updateUser = utils_1.asyncErrorController((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { collection } = yield connection_1.default();
    res.status(201).json({
        user: yield collection
            .updateOne({ _id: new mongodb_1.ObjectId(req.params.id) }, { $set: Object.assign({}, req.body) }, { upsert: true })
    });
}));
exports.deleteUser = utils_1.asyncErrorController((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { collection } = yield connection_1.default();
    try {
        res
            .status(200)
            .json({
            user: yield collection.deleteOne({ _id: new mongodb_1.ObjectId(req.params.id) })
        });
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
//# sourceMappingURL=crud.js.map