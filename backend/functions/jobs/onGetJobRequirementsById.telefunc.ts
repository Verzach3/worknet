import type TelefuncContext from "../../types/Telefunc.Context";
import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { jobRequirements } from "../../database/schema"



export const onGetJobRequirementsById = async (id: string) => {
    const { db } = getContext<TelefuncContext>();

    if (!id) return {
        status: 400,
        error: true,
        data: "Id is required"
    }

    try {
        const data = await db.select().from(jobRequirements).where(eq(jobRequirements.id, id));

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

