'use server';

import { JSX } from 'react';
import { DishForm } from '@/components/back-components/DishForm/dish-form';
import { getAllCategories } from '@/libs/db/categories';
import { createDishAction } from '@/utils/form/form-actions/create-dish-action';

const CreateDishPage = async (): Promise<JSX.Element> => {
  const categories = await getAllCategories();

  return (
    <>
      <DishForm formAction={createDishAction} categories={categories} />
    </>
  );
};

export default CreateDishPage;
