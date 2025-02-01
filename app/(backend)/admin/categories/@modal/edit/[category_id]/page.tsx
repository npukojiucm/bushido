import { EditCategoryPage } from '@/features/(backend)/admin/categories/@form/edit/[category_id]/edit-category-page';
import { JSX } from 'react';

const Page = async ({
  params,
}: {
  params: Promise<{ category_id: string }>;
}): Promise<JSX.Element> => {
  return <EditCategoryPage params={params} />;
};

export default Page;
