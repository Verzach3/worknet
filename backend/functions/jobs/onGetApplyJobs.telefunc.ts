import type TelefuncContext from "../../types/Telefunc.Context";
import { getContext } from "telefunc";
import { applyjobs } from "../../database/schema"
import { eq } from "drizzle-orm";



export const onGetApplyJobs = async () => {

    const { db } = getContext<TelefuncContext>();

    const data = await db.select().from(applyjobs);

    if (!data) return {
        status: 404,
        message: 'Not Found',
        error: true
    }

    return {
        status: 200,
        message: 'Success',
        error: false,
        data
    }
}