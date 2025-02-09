'use server';

import { JSX } from 'react';
import { DishForm } from '@/components/back-components/DishForm/dish-form';
import { getAllCategories } from '@/libs/db/categories';
import { selectDishById } from '@/libs/db/dishes/select-dish-by-id';
import { updateDishAction } from '@/utils/form/form-actions/update-dish-action';

const EditDishPage = async ({
  params,
}: {
  params: Promise<{ dish_id: string }>;
}): Promise<JSX.Element> => {
  const categories = await getAllCategories();

  const dish_id = Number((await params).dish_id);
  const dish = await selectDishById(dish_id);

  const formAction = updateDishAction.bind(null, dish_id);

  return (
    <>
      <DishForm formAction={formAction} dish={dish} categories={categories} />
    </>
  );
};
export default EditDishPage;
