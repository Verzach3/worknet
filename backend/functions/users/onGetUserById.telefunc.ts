import type TelefuncContext from "../../types/Telefunc.Context";
import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { users } from "../../database/schema"


export const onGetUsers = async (id: string) => {
    const { db } = getContext<TelefuncContext>();

    try {

        if (!id) return {
            status: 400,
            error: true,
            data: "Id is required"
        }

        const data = await db.select().from(users).where(eq(users.id, id));

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

