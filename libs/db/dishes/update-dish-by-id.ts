import { pool } from '@/libs/db/connect';
import { CreateOrUpdateDish } from '@/types';

export const updateDishById = async (id: number, dish: CreateOrUpdateDish): Promise<void> => {
  const keys = Object.keys(dish);
  const values = Object.values(dish);

  const query = `
      UPDATE dishes
      SET ${keys.map((key, i) => `${key} = $${i + 1}`).join(', ')},
          updated_at = NOW()
      WHERE id = $${keys.length + 1}
      RETURNING *;
  `;

  await pool.query(query, [...values, id]);
};
