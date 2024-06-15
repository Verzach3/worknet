import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { nanoid } from 'nanoid'

import type TelefuncContext from "../../types/Telefunc.Context";
import { type profileTypeInsert, profile } from "../../database/schema"
import { onCheckUser } from "../middleware"


export const onCreateProfile = async (profileData: profileTypeInsert) => {
    const { db } = await getContext<TelefuncContext>();


    if (!profileData) return {
        message: "Profile data is required",
        status: 400,
        error: true
    }

    const { id, user_id, ...rest } = profileData;

    if (!user_id) return {
        message: "userId is required",
        status: 400,
        error: true
    }

    const { user } = await onCheckUser(user_id);

    if (!user) return {
        message: "User not found",
        status: 404,
        error: true
    }

    try {

        const data = await db.insert(profile).values({
            id: nanoid(),
            user_id,
            ...rest
        });

        return {
            message: "Profile created successfully",
            status: 201,
            error: false,
            data
        }
        
    } catch (error) {
        return {
            message: "Error creating profile",
            status: 500,
            error: true
        }
    }

};
