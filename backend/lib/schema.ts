import { z } from 'zod';

export const updateUserSchema = z.object({
  name: z.string().min(1, 'Enter name'),
  city: z.string().min(1, 'Enter city'),
  country: z.string().min(1, 'Enter country'),
  address: z.string().min(1, 'Enter address'),
});
