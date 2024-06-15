import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { nanoid } from 'nanoid'

import type TelefuncContext from "../../types/Telefunc.Context";
import { type notificationsTypeInsert, notifications } from "../../database/schema"
import { onCheckUser, onCheckJob } from "../middleware"



export const onCreateNotifications = async (notificationsData:notificationsTypeInsert) => {

    const { db } = getContext<TelefuncContext>();

    if(!notificationsData) return {
        status: 404,
        message: 'notificationsData is required',
        error: true
    }

    const { id, job_id, user_id, ...rest } = notificationsData;

    if (!user_id) return {
        status: 400,
        message: 'user_id is required',
        error: true
    }

    if (!job_id) return {
        status: 400,
        message: 'job_id is required',
        error: true
    }

    const { user } = await onCheckUser( user_id )

    if(!user) return {
        status: 404,
        message: 'user not found',
        error: true
    }


    const { data: isJob } = await onCheckJob( job_id )

    if(!isJob) return {
        status: 404,
        message: 'job not found',
        error: true
    }

    try {

        const data = await db.insert(notifications).values({
            id: nanoid(),
            job_id,
            user_id,
            ...rest
        })

        return {
            status: 200,
            message: 'notifications created successfully',
            data,
            error: false
        }

    } catch (error) {
        return {
            status: 500,
            message: 'notifications not created',
            error: true
        }
    }

}


