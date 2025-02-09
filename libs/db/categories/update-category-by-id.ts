import { pool } from '@/libs/db/connect';
import { CreateOrUpdateCategory } from '@/types';

export const updateCategoryById = async (
  category_id: number,
  category: CreateOrUpdateCategory,
): Promise<void> => {
  const query = `
        UPDATE categories
        SET title      = $1,
            is_active  = $2,
            updated_at = NOW()
        WHERE id = $3
        RETURNING id, title;
    `;

  try {
    const result = await pool.query(query, [category.title, category.is_active, category_id]);
    return { success: true, category: result.rows[0] };
  } catch (error) {
    console.error('Ошибка при обновлении категории:', error);
  }
};
