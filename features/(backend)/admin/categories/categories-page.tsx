import { JSX } from 'react';
import { Table } from '@/components/back-components/Table/table';
import { getAllCategories } from '@/libs/db/categories/get-all-categories';
import Link from 'next/link';

export const CategoriesPage = async (): Promise<JSX.Element> => {


  return (
    <>
      <Link href={`/admin/categories/create`}>Создать</Link>
      <Link href={`/admin/categories/edit/1`}>Редактировать</Link>

      <Table>{rows}</Table>
    </>
  );
};
