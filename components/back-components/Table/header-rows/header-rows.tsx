import { JSX } from 'react';
import { HeaderRowProps } from '@/components/back-components/Table/header-rows/header-rows.props';
import { headerRows } from '@/utils/table-utils';

export const HeaderRows = ({ type }: HeaderRowProps): JSX.Element => {
  const columns = type === 'dishes' ? headerRows.dishes : headerRows.categories;

  return (
    <tr>
      {columns.map((c) => (
        <th key={c}>{c}</th>
      ))}
    </tr>
  );
};
