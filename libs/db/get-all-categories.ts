import { pool } from '@/libs/db/db';
import { QueryResult } from 'pg';
import { Category } from '@/types';

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const queryResult: QueryResult<Category> = await pool.query(
      `SELECT id, title, is_active, created_at, updated_at
       FROM categories;`,
    );

    return queryResult.rows.map((row) => ({
      id: row.id,
      title: row.title,
      is_active: row.is_active,
      created_at: new Date(row.created_at),
      updated_at: new Date(row.updated_at),
    }));
  } catch (error) {
    console.error('Ошибка запроса категорий:', error);
    throw new Error('Ошибка запроса категорий');
  }
};
