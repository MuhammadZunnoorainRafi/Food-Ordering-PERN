import { z } from 'zod';

export const restaurantFormSchema = z.object({
  name: z.string().min(1, 'Enter name'),
  city: z.string().min(1, 'Enter city'),
  cuisines: z.array(z.string()).min(1, 'Select atleast one value'),
  menuItems: z
    .array(
      z.object({
        name: z.string().min(1, 'Enter menu name'),
        price: z.coerce.number().min(1, 'Enter menu price'),
      })
    )
    .min(1, 'Add atleast one item'),
});

export type RestaurantFormType = z.infer<typeof restaurantFormSchema>;
