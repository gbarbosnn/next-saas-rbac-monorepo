import { z } from 'zod'

import { rolesSchemas } from '../roles'

export const userSchema = z.object({
  id: z.string(),
  role: rolesSchemas,
})

export type User = z.infer<typeof userSchema>
