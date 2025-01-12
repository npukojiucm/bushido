import { JSX } from 'react';
import { DishForm } from '@/components/back-components/DishForm/dish-form';
import { getDishById } from '@/libs/db/dishes';
import { getAllCategories } from '@/libs/db/categories';

export const EditDishPage = async ({ dish_id }: { dish_id: number }): Promise<JSX.Element> => {
  const dish = await getDishById(dish_id);
  const categories = await getAllCategories();


  return <DishForm dish={dish} categories={categories} />;
};
