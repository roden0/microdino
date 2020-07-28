export default async ({ response }, nextFn) => {
	try {
		await nextFn();
	} catch (err) {
		console.error(err.message);
		response.status = 500;
		response.body = { msg: err.message };
	}
};
