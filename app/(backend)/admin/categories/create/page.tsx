'use server';

import { JSX } from 'react';
import { createCategoryAction } from '@/utils/form/form-actions/create-category-action';
import { CategoryForm } from '@/components/back-components/CategoryForm/category-form';

const CreateCategoryPage = async (): Promise<JSX.Element> => {
  return <CategoryForm formAction={createCategoryAction} />;
};

export default CreateCategoryPage;
