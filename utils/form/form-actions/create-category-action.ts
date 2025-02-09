'use server';

import { CategoryFormData, CreateOrUpdateCategory } from '@/types';
import { parseFormData } from '@/utils/form/form-data/parse-form-data';
import { createCategory } from '@/libs/db/categories';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export const createCategoryAction = async (formData: FormData): Promise<void> => {
  const data = parseFormData<CategoryFormData>(formData);

  const category: CreateOrUpdateCategory = {
    title: data.title,
    is_active: data.is_active === '0' ? 0 : 1,
  };

  await createCategory(category);
  revalidatePath('/admin/categories');
  redirect('/admin/categories');
};
