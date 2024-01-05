"use server"

import { z } from "zod";
import { RegisterSchema } from "@/schema";
import bcrypt from "bcrypt"
import { db } from "@/lib/db";
import { getUserByEmail } from "@/service/user";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);
    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }
    const { email, name, password } = validateFields.data
    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
        return { error: "Email already in use" }
    }
    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    return { success: "User created" }
};