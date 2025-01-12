import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  type: 'dishes' | 'categories';
}
