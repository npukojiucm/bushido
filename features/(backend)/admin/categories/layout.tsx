import { JSX } from 'react';
import { CategoriesLayoutProps } from '@/features/(backend)/admin/categories/layout.props';

export const CategoriesLayout = ({ children, form }: CategoriesLayoutProps): JSX.Element => {
  return (
    <main>
      {children}
      {form}
    </main>
  );
};
