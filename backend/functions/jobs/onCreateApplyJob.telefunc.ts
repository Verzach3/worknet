import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { nanoid } from 'nanoid'

import type TelefuncContext from "../../types/Telefunc.Context";
import { type applyjobsTypeInsert, applyjobs } from "../../database/schema"
import { onCheckUser, onCheckJob } from "../middleware"


export const onCreateApplyJob = async (applyjobData: applyjobsTypeInsert) => {

    const { db } = getContext<TelefuncContext>();

    const { id, job_id, user_id, ...rest } = applyjobData;

    if (!job_id) return {
        status: 400,
        message: "Job ID is required",
        error: true
    }

    if (!user_id) return {
        status: 400,
        message: "User ID is required",
        error: true
    }


    const { user } = await onCheckUser(user_id);

    if (!user) return {
        status: 404,
        message: "User not found",
        error: true
    }

    const { data: isJob } = await onCheckJob(job_id);

    if (!isJob) return {
        status: 404,
        message: "Job not found",
        error: true
    }


    try {
        
        // Check if user has already applied for the job
        const isApply = await db.select().from(applyjobs).where(eq(applyjobs.user_id, user_id))

        if (isApply) return {
            status: 400,
            message: "You have already applied for this job",
            error: true
        }

        const data = await db.insert(applyjobs).values({
            id: nanoid(),
            user_id,
            job_id,
            ...rest
        });

        return {
            status: 200,
            message: "Job applied successfully",
            data,
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