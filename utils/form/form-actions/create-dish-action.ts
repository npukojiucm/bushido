'use server';

import { parseFormData } from '@/utils/form/form-data/parse-form-data';
import { CreateOrUpdateDish, DishFormData } from '@/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { insertDish } from '@/libs/db/dishes/insert-dish';
import { uploadImage } from '@/libs/object-storage/upload-image';

export const createDishAction = async (formData: FormData): Promise<void> => {
  const data = parseFormData<DishFormData>(formData);

  const dish: CreateOrUpdateDish = {
    title: data.title,
    is_active: data.is_active === '0' ? 0 : 1,
    category_id: data.category_id === '' ? null : Number(data.category_id),
  };

  if (data.image_file instanceof File) {
    dish['image_link'] = await uploadImage(data.image_file, dish.title);
  } else dish['image_link'] = 'no_image';

  if (data.price) dish['price'] = Number(data.price);
  if (data.weight) dish['weight'] = Number(data.weight);
  if (data.count_portion) dish['count_portion'] = Number(data.count_portion);
  if (data.ingredients)
    dish['ingredients'] = data.ingredients.split(', ').map((item) => item.trim());

  await insertDish(dish);
  revalidatePath('/admin/dishes');
  redirect('/admin/dishes');
};
