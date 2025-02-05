'use server';

import { CategoryFormData } from '@/types';
import { parseFormData, transformCategory } from '@/utils/form/form-data/parse-form-data';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { updateCategoryById } from '@/libs/db/categories/update-category-by-id';

export const updateCategoryAction = async (
  formData: FormData,
  category_id: number,
): Promise<void> => {
  const category = parseFormData<CategoryFormData>(formData, transformCategory);

  await updateCategoryById(category_id, category);

  revalidatePath('/admin/categories');

  redirect('/admin/categories');
};
