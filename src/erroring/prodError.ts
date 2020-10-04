export default (err: { isOperational: any; statusCode: any; status: any; message: any }, res: { statusCode: (arg0: any) => { (): any; new(): any; json: { (arg0: { status: any; message: any }): void; new(): any } }; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; message: string }): void; new(): any } } }) => {
	// Goes to client
	if (err.isOperational) {
		res.statusCode(err.statusCode).json({
			status: err.status,
			message: err.message
		})
	} else {
		// Stays internaly to the developer for debugging
		res.status(500).json({
			status: "Error",
			message: "Something went wrong"
		})
	}
}