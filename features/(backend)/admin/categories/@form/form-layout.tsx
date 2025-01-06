import { JSX } from 'react';
import { FormLayoutProps } from '@/features/(backend)/admin/categories/@form/form-layout.props';

export const FormLayout = ({ children, ...props }: FormLayoutProps): JSX.Element => {
  return <div {...props}>{children}</div>;
};
