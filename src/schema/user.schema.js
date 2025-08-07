import { z } from "zod";

const userSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters long'),
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    avatar: z.string().url('Invalid URL format').optional(),
});

const userIdSchema = z.object({
    userId: z.number().int().positive('User ID must be a positive integer'),
});

export { userSchema, userIdSchema };
