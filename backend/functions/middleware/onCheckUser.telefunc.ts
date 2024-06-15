import { getContext } from "telefunc";
import { eq } from "drizzle-orm";

import type TelefuncContext from "../../types/Telefunc.Context";
import { type userTypeInsert, users } from "../../database/schema"

export const onCheckUser = async ( userId: string ) => {

    const { db } = getContext<TelefuncContext>();

    try {

        const userExists = await db.select().from(users).where(eq(users.id, userId));

        if (!userExists) return {
            user: null,
            status: "404",
            message: "User not found!",
            error: true
        }

        return {
            user: userExists,
            status: "200",
            message: "User found!",
            error: false
        }

    } catch (error) {
        return {
            user: null,
            status: "500",
            message: "Internal server error!",
            error: true
        }
    }


}