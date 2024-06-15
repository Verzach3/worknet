import type TelefuncContext from "../../types/Telefunc.Context";
import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { notifications } from "../../database/schema"



export const onGetNotificationsById = async (id: string) => {
    const { db } = getContext<TelefuncContext>();

    if (!id) return {
        status: 400,
        error: true,
        data: "Id is required"
    }

    try {
        const data = await db.select().from(notifications).where(eq(notifications.id, id));

        if (!data) return {
            status: 404,
            error: true,
            data: "notifications not found"
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

