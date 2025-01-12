import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  headRows: ReactNode;
  bodyRows: ReactNode;
}
