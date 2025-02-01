import { JSX } from 'react';
import CreateCategoryPage from '@/app/(backend)/admin/categories/create/page';
import { Modal } from '@/components/back-components/Modal/modal';

const ModalCreateCategoryPage = (): JSX.Element => {
  return (
    <Modal>
      <CreateCategoryPage />
    </Modal>
  );
};

export default ModalCreateCategoryPage;
