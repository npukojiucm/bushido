'use server';

import { CategoryFormData, CreateOrUpdateCategory } from '@/types';
import { parseFormData } from '@/utils/form/form-data/parse-form-data';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { updateCategoryById } from '@/libs/db/categories/update-category-by-id';

export const updateCategoryAction = async (
  formData: FormData,
  category_id: number,
): Promise<void> => {
  const data = parseFormData<CategoryFormData>(formData);

  const category: CreateOrUpdateCategory = {
    id: category_id,
    title: data.title,
    is_active: data.is_active === '0' ? 0 : 1,
  };

  await updateCategoryById(category_id, category);

  revalidatePath('/admin/categories');

  redirect('/admin/categories');
};
