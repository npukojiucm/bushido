import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CategoriesLayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  form: ReactNode;
}
