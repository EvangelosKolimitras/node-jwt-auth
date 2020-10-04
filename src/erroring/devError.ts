export default (err: { statusCode: any; status: any; message: any; }, res: { status: (arg0: any) => { (): any; new(): any; json: { (arg0: { status: any; error: any; message: any; }): any; new(): any; }; }; }) => res.status(err.statusCode).json({
	status: err.status,
	error: err,
	message: err.message
});