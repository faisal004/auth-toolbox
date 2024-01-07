"use server"

import { z } from "zod";
import { RegisterSchema } from "@/schema";
import bcrypt from "bcryptjs"
import { db } from "@/lib/db";
import { getUserByEmail } from "@/service/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
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
    const verificationToken= await generateVerificationToken(email)
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
    )

    return { success: "Confirmation email sent!" }
};