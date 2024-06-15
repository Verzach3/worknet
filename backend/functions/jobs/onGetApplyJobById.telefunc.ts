import type TelefuncContext from "../../types/Telefunc.Context";
import { getContext } from "telefunc";
import { applyjobs } from "../../database/schema"
import { eq } from "drizzle-orm";



export const onGetApplyJobById = async (applyJobId: string) => {

    const { db } = getContext<TelefuncContext>();


    if(!applyJobId) return {
        status: 400,
        message: 'Bad Request',
        error: true
    }

    const isExist = await db.select().from(applyjobs).where(eq(applyjobs.id, applyJobId))

    if (!isExist) return {
        status: 404,
        message: 'Not Found',
        error: true
    }

    return {
        status: 200,
        message: 'Success',
        error: false,
        data: isExist
    }
}