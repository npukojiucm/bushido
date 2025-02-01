import { pool } from '@/libs/db/connect';
import { Category } from '@/types';

export const createCategory = async ({
  title,
  is_active,
}: {
  title: string;
  is_active: number;
}): Promise<{
  success: boolean;
  category?: Category;
  error?: string | null;
}> => {
  try {
    const queryResult = await pool.query(
      `INSERT INTO categories (title, is_active)
       VALUES ($1, $2)
       RETURNING id, title, is_active`,
      [title, is_active],
    );

    return { success: true, category: queryResult.rows[0] };
  } catch (error: any) {
    console.error('Ошибка при создании категории:', error);

    if (error.code === '23505') {
      return { success: false, error: 'Категория с таким названием уже существует' };
    }

    return { success: false, error: null };
  }
};
