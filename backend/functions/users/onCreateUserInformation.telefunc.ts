import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { nanoid } from 'nanoid'

import type TelefuncContext from "../../types/Telefunc.Context";
import { type userInformationTypeInsert, userInformation } from "../../database/schema"
import { onCheckUser } from "../middleware"


export const onCreateUserInformation = async (userInformationData: userInformationTypeInsert) => {
    const { db } = await getContext<TelefuncContext>();


    if (!userInformationData) return {
        status: 400,
        message: "User information is required",
        error: true
    }


    const { id, user_id, ...rest } = userInformationData;

    if (!user_id) return {
        status: 400,
        message: "userId is required",
        error: true
    }

    const { user } = await onCheckUser(user_id);

    if (!user) return {
        status: 404,
        message: "User not found",
        error: true
    }

    try {

        const data = await db.insert(userInformation).values({
            id: nanoid(),
            user_id,
            ...rest
        })

        return {
            status: 201,
            message: "User information created successfully",
            data,
            error: false
        }

     } catch(error) {
        return {
            status: 500,
            message: "Internal server error",
            error: true
        }
    }

}