import { JSX } from 'react';
import { Modal } from '@/components/back-components/Modal/modal';
import EditDishPage from '@/app/(backend)/admin/dishes/edit/[dish_id]/page';

const ModalEditDishPage = async ({ params }: { params: Promise<{ dish_id: string }> }): Promise<JSX.Element> => {
  return (
    <Modal>
      <EditDishPage params={params} />
    </Modal>
  );
};

export default ModalEditDishPage;
