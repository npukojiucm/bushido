import { JSX } from 'react';
import { getAllCategories } from '@/libs/db/categories';
import { Table } from '@/components/back-components/Table/table';
import { HeaderRows } from '@/components/back-components/Table/header-rows/header-rows';
import { BodyRows } from '@/components/back-components/Table/body-rows/body-rows';
import { Category } from '@/types';
import { Button } from '@/components/back-components/Button/button';

const CategoriesPage = async (): Promise<JSX.Element> => {
  const categories = await getAllCategories();

  return (
    <>
      <Button type={'button'} title={'Добавить'} action={'create'} />

      <Table
        headRows={<HeaderRows type={'categories'} />}
        bodyRows={<BodyRows<Category> rowItems={categories} />}
      />
    </>
  );
};

export default CategoriesPage;
