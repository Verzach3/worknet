import { getContext } from "telefunc";
import { eq } from "drizzle-orm";

import type TelefuncContext from "../../types/Telefunc.Context";
import { type jobsTypeInsert, jobs } from "../../database/schema"


export const onCheckJob = async (jobId: string) => {

    const { db } = await getContext<TelefuncContext>();


    try {
        const isJob = await db.select().from(jobs).where(eq(jobs.id, jobId));

        if (!isJob) return {
            status: 404,
            message: "Job not found",
            error: true
        }

        return {
            status: 200,
            message: "Job found",
            error: false,
            data: isJob
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error checking job requirements",
            error: true
        }
    }

};