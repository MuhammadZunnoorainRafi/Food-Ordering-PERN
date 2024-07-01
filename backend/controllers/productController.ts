import { Request, Response } from 'express';
import { restaurantFormSchema } from '../lib/schema';
import { pool } from '../lib/db';

export const createProductController = async (req: Request, res: Response) => {
  const validation = restaurantFormSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json(validation.error.flatten().fieldErrors);
  }

  const { name, city, cuisine, menu_items } = validation.data;

  const db = await pool.connect();
  try {
    const value = {
      name,
      city,
      cuisine,
      menuItems: JSON.stringify(menu_items),
    };
    await db.query(
      `INSERT INTO products(name,city,cuisine,menu_items)`,
      Object.values(value)
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Something went wrong' });
  } finally {
    db.release();
  }
};
