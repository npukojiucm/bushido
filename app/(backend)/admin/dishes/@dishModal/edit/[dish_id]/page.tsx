import { EditDishPage } from '@/pages/backend/dishes/edit/edit-dish-page';
import { JSX } from 'react';

const Page = async ({ params }: { params: Promise<{ dish_id: string }> }): Promise<JSX.Element> => {
  return <EditDishPage dish_id={+(await params).dish_id} />;
};

export default Page;
