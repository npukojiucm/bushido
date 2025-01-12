import { JSX } from 'react';
import { TableProps } from '@/components/back-components/Table/table.props';

export const Table = ({ headRows, bodyRows }: TableProps): JSX.Element => {
  return (
    <table>
      <thead>{headRows}</thead>

      <tbody>{bodyRows}</tbody>
    </table>
  );
};
