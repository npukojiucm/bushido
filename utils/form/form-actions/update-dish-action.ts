'use server';

import { CreateOrUpdateDish, DishFormData } from '@/types';
import { parseFormData } from '@/utils/form/form-data/parse-form-data';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { uploadImage } from '@/libs/object-storage/upload-image';
import { updateDishById } from '@/libs/db/dishes/update-dish-by-id';

export const updateDishAction = async (dish_id: number, formData: FormData): Promise<void> => {
  const data = parseFormData<DishFormData>(formData);

  const dish: CreateOrUpdateDish = {
    id: dish_id,
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

  await updateDishById(dish_id, dish);

  revalidatePath('/admin/dishes');

  redirect('/admin/dishes');
};
