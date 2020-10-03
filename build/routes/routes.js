"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crud_1 = require("../operations/crud");
exports.default = express_1.default
    .Router()
    .get('/users/:id', crud_1.getUser)
    .get('/users', crud_1.getUsers)
    .post('/users/create/user', crud_1.createUser)
    .patch('/users/update/user/:id', crud_1.updateUser)
    .delete("/users/delete/user/:id", crud_1.deleteUser);
//# sourceMappingURL=routes.js.map