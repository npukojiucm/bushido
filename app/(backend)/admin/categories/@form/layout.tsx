import { JSX } from 'react';
import { FormLayout } from '@/features/(backend)/admin/categories/@form/form-layout';
import { FormLayoutProps } from '@/features/(backend)/admin/categories/@form/form-layout.props';

const Layout = ({ children }: FormLayoutProps): JSX.Element => {
  return <FormLayout children={children} />;
};

export default Layout;
