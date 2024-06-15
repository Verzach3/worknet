import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { nanoid } from 'nanoid'

import type TelefuncContext from "../../types/Telefunc.Context";
import { type jobRequirementsTypeInsert, jobRequirements } from "../../database/schema"
import { onCheckJob } from "../middleware"


export const onCreateJobRequirements = async ( jobRequirementsData: jobRequirementsTypeInsert ) => {
    
    const { db } = getContext<TelefuncContext>();

    
    if (!jobRequirementsData) {
        return {
            error: true,
            status: 400,
            message: "jobRequirementsData is required"
        }
    }


    const { id, job_id,...rest } = jobRequirementsData;


    if (!job_id) {
        return {
            error: true,
            status: 400,
            message: "job_id is required"
        }
    }


    const { data: isJob } = await onCheckJob(job_id);

    if (!isJob) {
        return {
            error: true,
            status: 404,
            message: "Job not found"
        }
    }

    try {
       
        const data = await db.insert(jobRequirements).values({
            id: nanoid(), 
            job_id,
            ...rest
        });

        return {
            error: false,
            status: 200,
            message: "Job Requirements created successfully",
            data
        }

    } catch (error) {
        return {
            error: true,
            status: 500,
            message: error
        }
    }

};