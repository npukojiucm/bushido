import { CreateOrUpdateDish } from '@/types';
import { pool } from '@/libs/db/connect';

export const insertDish = async (dish: CreateOrUpdateDish): Promise<void> => {
  const keys = Object.keys(dish);
  const values = Object.values(dish);

  const query = `
      INSERT INTO dishes (${keys.join(', ')})
      VALUES (${keys.map((_, i) => `$${i + 1}`).join(', ')})
      RETURNING *;
  `;

  await pool.query(query, values);
};
