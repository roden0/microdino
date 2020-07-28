import {config} from "https://deno.land/x/dotenv/mod.ts";

export const {
    APP_HOST,
    APP_PORT,
    APP_ENV,
    DB_USER,
    DB_NAME,
    DB_HOST,
    DB_PASS,
    DB_PORT
} = config();
