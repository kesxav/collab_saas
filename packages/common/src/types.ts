import {z} from "zod"

export const CreateUserSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(5).max(100),
    email: z.email()
})

export const SigninSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(5).max(100)
})