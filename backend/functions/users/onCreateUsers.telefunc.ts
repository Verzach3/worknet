import { getContext } from "telefunc";
import { eq } from "drizzle-orm";
import { nanoid } from 'nanoid'

import type TelefuncContext from "../../types/Telefunc.Context";
import { type usersTypeInsert, users } from "../../database/schema"
import { onCheckUser } from "../middleware"


export const onCreateUsers = async (userData: usersTypeInsert) => {
    
    const { db } = getContext<TelefuncContext>();


    if (!userData) {
        return {
            status: 400,
            message: "Invalid data",
            error: true
        }
    }


    const { user } = await onCheckUser(userData.id);

    if (user) {
        throw new Error("User already exists");
    }

    try {

        const { id, ...rest } = userData;

        const data = await db.insert(users).values({
            id: nanoid(),
            ...rest
        });

        return {
            status: 201,
            data: data,
            message: "User created successfully",
            error: false
        }

    } catch (error) {
        return {
            status: 500,
            message: error,
            error: true
        }
    }

}