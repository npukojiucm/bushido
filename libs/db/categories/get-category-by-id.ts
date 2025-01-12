import { pool } from '@/libs/db/connect';
import { QueryResult } from 'pg';
import { Category } from '@/types';

export const getCategoryById = async (category_id: number): Promise<Category | null> => {
  try {
    const queryResult: QueryResult<Category> = await pool.query(
      `SELECT id, title, is_active, created_at, updated_at
       FROM categories
       WHERE id = $1
       LIMIT 1;`,
      [category_id],
    );

    if (queryResult.rows.length === 0) {
      console.warn(`Категория с ID ${category_id} не найдена.`);
      return null;
    }

    const row = queryResult.rows[0];

    return {
      id: row.id,
      title: row.title,
      is_active: row.is_active,
      created_at: new Date(row.created_at),
      updated_at: new Date(row.updated_at),
    };
  } catch (error) {
    console.error(`Ошибка при запросе категории с ID ${category_id}:`, error);
    throw new Error(`Не удалось получить категорию с ID ${category_id}`);
  }
};
