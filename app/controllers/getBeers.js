import { getBeers } from "../services/beerService.js";

export default async ({ response }) => {
	try {
		console.log(response);
		response.body = await getBeers();
	} catch (error) {
		console.error(error.message);
	}
};
