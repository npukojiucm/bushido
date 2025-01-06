import { JSX } from 'react';
import { Table } from '@/components/back-components/Table/table';
import { getAllCategories } from '@/libs/db/get-all-categories';

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
      <Table>{rows}</Table>
    </>
  );
};
