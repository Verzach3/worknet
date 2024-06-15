import type TelefuncContext from "../../types/Telefunc.Context";
import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { users } from "../../database/schema"


export const onGetUsers = async () => {
    const { db } = getContext<TelefuncContext>();

    try {

        const data = await db.select().from(users);

        if (!data) return {
            status: 404,
            error: true,
            data: "Users not found"
        }

        return {
            status: 200,
            error: false,
            data
        }
        
    } catch (error) {
        return {
            status: 500,
            error: true,
            data: error
        }
    }
};

