import { Client } from "https://deno.land/x/postgres@v0.3.11/mod.ts";
import { DB_USER, DB_NAME, DB_HOST, DB_PASS, DB_PORT } from "./config.js";

class Database {
	constructor() {
		this.retries = 3;
		this.timeOut = 3000;
		this.client = new Client({
			user: DB_USER,
			database: DB_NAME,
			host: DB_HOST,
			password: DB_PASS,
			port: DB_PORT
		});
		this.connect();
	}

	async connect() {
		while (this.retries) {
			try {
				await this.client.connect();
				break;
			} catch (err) {
				this.retries -= 1;
				console.error(err);
				console.log("Database@connect: error");
				console.log(`retries left: ${this.retries}`);
				await new Promise(res=> setTimeout(res, this.timeOut));
			}
		}
	}
}

export default new Database().client;
