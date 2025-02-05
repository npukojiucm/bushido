import { JSX } from 'react';
import { Modal } from '@/components/back-components/Modal/modal';
import { CategoryForm } from '@/components/back-components/CategoryForm/category-form';
import { getCategoryById } from '@/libs/db/categories';
import { updateCategoryAction } from '@/utils/form/form-actions/update-category-action';

const ModalEditCategoryPage = async ({
  params,
}: {
  params: Promise<{ category_id: string }>;
}): Promise<JSX.Element> => {
  const category_id = (await params).category_id;
  const category = await getCategoryById(+category_id);

  const formAction = updateCategoryAction.bind(null);

  return (
    <Modal>
      <CategoryForm
        formAction={async (formData): Promise<void> => {
          'use server';
          await formAction(formData, +category_id);
        }}
        category={category ? category : undefined}
      />
    </Modal>
  );
};

export default ModalEditCategoryPage;
