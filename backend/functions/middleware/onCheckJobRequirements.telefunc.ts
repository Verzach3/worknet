import { getContext } from "telefunc";
import { eq } from "drizzle-orm";

import type TelefuncContext from "../../types/Telefunc.Context";
import { type jobRequirementsTypeInsert, jobRequirements } from "../../database/schema"

export const onCheckJobRequirements = async (jobRequirementsId: string) => {

    const { db } = getContext<TelefuncContext>();


    try {
        const jobRequirementsExists = await db.select().from(jobRequirements).where(eq(jobRequirements.id, jobRequirementsId));
    
        if (!jobRequirementsExists) return {
            status: 404,
            message: "Job Requirements not found",
            error: true
        }

        return {
            status: 200,
            message: "Job Requirements found",
            jobRequirements: jobRequirementsExists,
            error: false
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error checking job requirements",
            error: true
        }
    }


}