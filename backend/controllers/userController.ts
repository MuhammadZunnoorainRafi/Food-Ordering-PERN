import { Request, Response } from 'express';
import { pool } from '../lib/db';
import { updateUserSchema } from '../lib/schema';

export const userRegController = async (req: Request, res: Response) => {
  const { auth0Id, email } = req.body;
  const db = await pool.connect();
  try {
    const { rows: userExists } = await db.query(
      `SELECT * FROM users WHERE auth0Id=$1`,
      [auth0Id]
    );
    if (userExists[0]) {
      return res.status(200).send();
    }

    const { rows } = await db.query(
      `INSERT INTO users(auth0Id,email) VALUES($1,$2) RETURNING *`,
      [auth0Id, email]
    );

    if (!rows[0]) {
      return res.status(400).json({ message: 'User not created' });
    }

    res.status(200).json({ message: 'user created successfully' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Something went wrong!' });
  } finally {
    db.release();
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  const validations = updateUserSchema.safeParse(req.body);
  if (!validations.success) {
    return res.status(400).json(validations.error.flatten().fieldErrors);
  }

  const { name, city, country, address } = validations.data;

  const db = await pool.connect();
  try {
    const values = {
      name,
      city,
      country,
      address,
      userId: req.userId,
    };
    await db.query(
      `UPDATE users SET name=$1,city=$2,country=$3,address_line_1=$4 WHERE id=$5`,
      Object.values(values)
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Something went wrong' });
  } finally {
    db.release();
  }
};
