import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { nanoid } from 'nanoid'

import type TelefuncContext from "../../types/Telefunc.Context";
import { type profileImageTypeInsert, profileImage, profile } from "../../database/schema"
import { onCheckUser } from "../middleware"


export const onCreateProfileImage = async (profileImageData: profileImageTypeInsert) => {

    const { db } = await getContext<TelefuncContext>();

    if (!profileImageData) return {
        status: 400,
        message: "Data is required",
        error: true
    }

    const { id, profile_id, ...rest } = profileImageData;

    if (!profile_id) return {
        status: 400,
        message: "Profile ID is required",
        error: true
    }

    try {
        const isProfile = await db.select().from(profile).where(eq(profile.id, profile_id))


        if(!isProfile) return {
            status: 404,
            message: "Profile not found",
            error: true
        }

        const data = db.insert(profileImage).values({
            id: nanoid(),
            profile_id,
            ...rest
        })

        return {
            status: 200,
            message: "Profile image created",
            error: false,
            data
        }

    } catch (error) {
        return {
            status: 500,
            message: error,
            error: true
        }
    }

}

