import type TelefuncContext from "../../types/Telefunc.Context";
import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { jobs } from "../../database/schema"



export const onGetJobs = async () => {
    const { db } = getContext<TelefuncContext>();

    try {
        const data = await db.select().from(jobs);

        if (!data) return {
            status: 404,
            error: true,
            data: "Jobs not found"
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

