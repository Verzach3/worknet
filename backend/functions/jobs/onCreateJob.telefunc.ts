import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { nanoid } from 'nanoid'

import type TelefuncContext from "../../types/Telefunc.Context";
import { type jobsTypeInsert, jobs } from "../../database/schema"
import { onCheckUser, onCheckJob } from "../middleware"



export const onCreateJob = async (job: jobsTypeInsert) => {

    const { db } = getContext<TelefuncContext>();


    const { id, user_id, ...rest } = job;

        if (!user_id) return {
            error: true,
            status: 400,
            message: "userId is not provided"
        
        };


        const { user, error, status, message } = await onCheckUser(user_id);

        if (!user) return {
            error,
            status,
            message
        };


        const { data: isJob } = await onCheckJob( id );

        if (!isJob) return {
            error: true,
            status: 404,
            message: "job is not found"
        }


    try {

        const data = await db.insert(jobs).values({
            id: nanoid(),
            user_id: user[0].id,
            ...rest
        })

        return {
            error: false,
            status: 200,
            message: "job is created",
            data
        }
        
    } catch (error) {
        return {
            error: true,
            status: 500,
            message: error
        }
    }




    







}