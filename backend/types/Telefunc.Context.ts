import type { db } from "../database/db";

export default interface TelefuncContext {
	db: typeof db;
}
