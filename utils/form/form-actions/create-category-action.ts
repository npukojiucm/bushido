'use server';

import { CategoryFormData } from '@/types';
import { parseFormData, transformCategory } from '@/utils/form/form-data/parse-form-data';
import { createCategory } from '@/libs/db/categories/create-category';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export const createCategoryAction = async (formData: FormData): Promise<void> => {
  const category = parseFormData<CategoryFormData>(formData, transformCategory);

  const response = await createCategory(category);

  if (!response.success && response.error) {
    console.error(response.error); // ✅ Логируем ошибку, но НЕ возвращаем её
    return;
  }

  revalidatePath('/admin/categories');

  redirect('/admin/categories');
};
