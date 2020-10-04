
import connection, { createUrlString } from './connection'

describe('Function createUrlString', () => {
	it('should return a string', () => {
		const uri = createUrlString();
		expect(typeof uri).toBe("string")
	})
	it('and the string should contain the words "mongodb+srv" and "mongodb.net"', () => {
		const uri = createUrlString();
		const musts = [".mongodb.net", "mongodb+srv"]
		musts.forEach(el => {
			expect(uri).toContain(el)

		})
	})
})