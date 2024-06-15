import type TelefuncContext from "../../types/Telefunc.Context";
import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { type applyjobsTypeInsert, applyjobs } from "../../database/schema"


export const onDeleteApplyJob = async (id: string) => {

    const { db } = getContext<TelefuncContext>(); 

    if (!id) return {
        status: 400,
        message: "Bad Request",
        error: true
    }


    try {

        const isApplyJob = await db.select().from(applyjobs).where(eq(applyjobs.id, id))

        if (!isApplyJob) return {
            status: 404,
            message: "Not Found",
            error: true
        }

        await db.delete(applyjobs).where(eq(applyjobs.id, id));
        return {
            status: 200,
            message: "Deleted Successfully",
            error: false
        }

        
    } catch (error) {
        return {
            status: 500,
            message: "Internal Server Error",
            error: true
        }
    }


};