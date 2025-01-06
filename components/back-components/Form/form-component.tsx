import { JSX } from 'react';
import { FormComponentProps } from '@/components/back-components/Form/form.props';
import Form from 'next/form';

export const FormComponent = ({ children }: FormComponentProps): JSX.Element => {
  return <Form action="#">{children}</Form>;
};
