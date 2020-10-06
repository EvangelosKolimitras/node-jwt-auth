"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importStar(require("./connection"));
describe('Function createUrlString', () => {
    it('should return a string', () => {
        const uri = connection_1.createUrlString();
        expect(typeof uri).toBe("string");
    });
    it('and the string should contain the words "mongodb+srv" and "mongodb.net"', () => {
        const uri = connection_1.createUrlString();
        [".mongodb.net", "mongodb+srv"].forEach(el => {
            expect(uri).toContain(el);
        });
    });
});
describe('Function connectToClient', () => {
    it('should return an object with the method db', () => __awaiter(void 0, void 0, void 0, function* () {
        const client = yield connection_1.connectToClient();
        expect(typeof client).toBe("object");
        expect(client).resolves.not.toBeFalsy;
        expect(client).toHaveProperty("db");
    }));
});
describe('Function connection', () => {
    it('should return the users database', () => __awaiter(void 0, void 0, void 0, function* () {
        const con = yield connection_1.default();
        expect(typeof con).toBe("object");
    }));
});
//# sourceMappingURL=conecction.test.js.map