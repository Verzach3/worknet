import { getContext } from "telefunc";
import type TelefuncContext from "../types/Telefunc.Context";

export async function testfunc() {
	const { db } = getContext<TelefuncContext>();
	return await db.query.users.findMany();
}
