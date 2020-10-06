import connection, { createUrlString, connectToClient } from './connection'

describe('Function createUrlString', () => {
	it('should return a string', () => {
		const uri = createUrlString();
		expect(typeof uri).toBe("string")
	})
	it('and the string should contain the words "mongodb+srv" and "mongodb.net"', () => {
		const uri = createUrlString();
		[".mongodb.net", "mongodb+srv"].forEach(el => {
			expect(uri).toContain(el)
		})
	})
})

describe('Function connectToClient', () => {
	it('should return an object with the method db', async () => {
		const client = await connectToClient();
		expect(typeof client).toBe("object")
		expect(client).resolves.not.toBeFalsy
		expect(client).toHaveProperty("db")
	})
})

describe('Function connection', () => {
	it('should return the users database', async () => {
		const con = await connection();
		expect(typeof con).toBe("object")
	})
})