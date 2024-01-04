"use server"

import { z } from "zod";
import { RegisterSchema } from "@/schema";

export const login = async (values: z.infer<typeof RegisterSchema >) => {
    const validateFields = RegisterSchema .safeParse(values);
    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }

    return { success: "Email Sent" }
};