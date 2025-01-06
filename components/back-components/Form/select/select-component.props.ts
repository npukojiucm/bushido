import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SelectComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  id: string;
  name: string;
  value: string;
  children: ReactNode;
}
