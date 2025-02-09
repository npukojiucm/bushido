import { QueryResult } from 'pg';
import { DishWithCategory } from '@/types';
import { pool } from '@/libs/db/connect';

export const selectDishById = async (id: number): Promise<DishWithCategory> => {
  try {
    const queryResult: QueryResult<DishWithCategory> = await pool.query(
      `
          SELECT d.id,
                 d.title,
                 d.image_link,
                 d.price,
                 d.weight,
                 d.ingredients,
                 d.count_portion,
                 d.category_id,
                 c.title AS category_title,
                 d.is_active,
                 d.created_at,
                 d.updated_at
          FROM dishes d
                   LEFT JOIN categories c
                             ON d.category_id = c.id
          WHERE d.id = $1;
      `,
      [id],
    );

    const row = queryResult.rows[0];
    return {
      id: row.id,
      title: row.title,
      image_link: row.image_link,
      price: row.price,
      weight: row.weight,
      ingredients: row.ingredients,
      count_portion: row.count_portion,
      category_id: row.category_id,
      category_title: row.category_title,
      is_active: row.is_active,
      created_at: row.created_at,
      updated_at: row.updated_at,
    };
  } catch (error) {
    console.error(`Ошибка запроса блюда с ID ${id}:`, error);
    throw new Error('Ошибка запроса блюда');
  }
};
