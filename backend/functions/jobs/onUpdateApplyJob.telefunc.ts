import type TelefuncContext from "../../types/Telefunc.Context";
import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { type applyjobsTypeInsert, applyjobs } from "../../database/schema"


export const onUpdateApplyJob = async (applyJobData: applyjobsTypeInsert) => {

    const { db } = getContext<TelefuncContext>(); 

    if (!applyJobData) return {
        status: 400,
        message: "Bad Request",
        error: true
    }

    const { id, ...rest } = applyJobData;

    try {
        const isApplyJobExist = await db.select().from(applyjobs).where(eq(applyjobs.job_id, id))

        if (!isApplyJobExist) return {
            status: 404,
            message: "Not Found",
            error: true
        }

        const newData = await db.update(applyjobs).set({...rest}).where(eq(applyjobs.job_id, id));


        if (!newData) return {
            status: 400,
            message: "Bad Request",
            error: true
        }

        return {
            status: 200,
            message: "Updated Successfully",
            data: newData,
            error: false
        }


    } catch( error ) {
        return {
            status: 500,
            message: "Internal Server Error",
            error: true
        }
    }


};

