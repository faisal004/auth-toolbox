"use server"

import { z } from "zod";
import { LoginSchema } from "@/schema";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);
    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }

    return { success: "Email Sent" }
};