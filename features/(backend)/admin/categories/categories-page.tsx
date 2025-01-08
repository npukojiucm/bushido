import { JSX } from 'react';
import { Table } from '@/components/back-components/Table/table';
import { getAllCategories } from '@/libs/db/get-all-categories';
import Link from 'next/link';

export const CategoriesPage = async (): Promise<JSX.Element> => {
  const categories = await getAllCategories();

  const rows = categories.map((category) => (
    <tr key={category.id}>
      <td>{category.id}</td>
      <td>{category.title}</td>
    </tr>
  ));

  return (
    <>
      <Link href={`/admin/categories/create`}>Создать</Link>
      <Link href={`/admin/categories/edit/1`}>Редактировать</Link>

      <Table>{rows}</Table>
    </>
  );
};
