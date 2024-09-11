import z from "zod";

const envSchema = z.object({
    DATABASe_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)