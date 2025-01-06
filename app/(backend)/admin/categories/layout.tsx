import { CategoriesLayout } from '@/features/(backend)/admin/categories/layout';
import { CategoriesLayoutProps } from '@/features/(backend)/admin/categories/layout.props';
import { JSX } from 'react';

const Layout = ({ children, form }: CategoriesLayoutProps): JSX.Element => {
  return <CategoriesLayout children={children} form={form} />;
};

export default Layout;
