import { z } from 'zod';

export const updateUserSchema = z.object({
  name: z.string().min(1, 'Enter name'),
  city: z.string().min(1, 'Enter city'),
  country: z.string().min(1, 'Enter country'),
  address: z.string().min(1, 'Enter address'),
});

export const restaurantFormSchema = z.object({
  name: z.string().min(1, 'Enter name'),
  city: z.string().min(1, 'Enter city'),
  cuisine: z.array(z.string()).min(1, 'Select atleast one value'),
  menu_items: z
    .array(
      z.object({
        name: z.string().min(1, 'Enter menu name'),
        price: z.coerce.number().min(1, 'Enter menu price'),
      })
    )
    .min(1, 'Add atleast one item'),
});
