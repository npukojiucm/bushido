import { JSX } from 'react';
import { TableProps } from '@/components/back-components/Table/table.props';

export const Table = ({ children }: TableProps): JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Название</th>
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </table>
  );
};
