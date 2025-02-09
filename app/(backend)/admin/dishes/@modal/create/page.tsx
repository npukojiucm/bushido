import { JSX } from 'react';
import { Modal } from '@/components/back-components/Modal/modal';
import CreateDishPage from '@/app/(backend)/admin/dishes/create/page';

const ModalCreateDishPage = async (): Promise<JSX.Element> => {
  return (
    <Modal>
      <CreateDishPage />
    </Modal>
  );
};

export default ModalCreateDishPage;
