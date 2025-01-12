import { JSX } from 'react';
import { FormLayoutProps } from '@/features/(backend)/admin/categories/@form/form-layout.props';

const Layout = ({ children }: FormLayoutProps): JSX.Element => {
  return <div>{children} </div>;
};

export default Layout;
