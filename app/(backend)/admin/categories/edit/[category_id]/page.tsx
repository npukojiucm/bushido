import { JSX } from 'react';
import { CategoryForm } from '@/components/back-components/CategoryForm/category-form';
import { getCategoryById } from '@/libs/db/categories';
import { EditCategoryPage as IEditCategoryPage } from '@/types';
import { updateCategoryAction } from '@/utils/form/form-actions/update-category-action';

const EditCategoryPage = async ({ params }: IEditCategoryPage): Promise<JSX.Element> => {
  const category_id = (await params).category_id;
  const category = await getCategoryById(+category_id);

  const formAction = updateCategoryAction.bind(null);

  return (
    <CategoryForm
      formAction={async (formData): Promise<void> => {
        'use server';
        await formAction(formData, +category_id);
      }}
      category={category ? category : undefined}
    />
  );
};

export default EditCategoryPage;
