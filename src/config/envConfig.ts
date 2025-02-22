import { z } from 'zod'

const configSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
})

type Config = z.infer<typeof configSchema>
const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
})

if (configProject.error) {
  Object.entries(configProject.error.errors).forEach(([key, value]) => {
    console.error(`Error in ${key}: ${value}`)
  })
}

const envConfig = configProject.data as unknown as Config

export default envConfig
