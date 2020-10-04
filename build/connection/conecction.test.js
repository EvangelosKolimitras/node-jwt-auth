"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
describe('createUrlString', () => {
    it('should return a string', () => {
        const uri = connection_1.createUrlString();
        expect(uri).toBeTruthy();
    });
});
//# sourceMappingURL=conecction.test.js.map