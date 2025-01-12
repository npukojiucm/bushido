import { JSX } from 'react';
import { InputComponentProps } from '@/components/back-components/Form/input/input-component.props';

export const InputComponent = ({
  type,
  id,
  name,
  defaultValue,
  ...props
}: InputComponentProps): JSX.Element => {
  return <input type={type} id={id} name={name} defaultValue={defaultValue} {...props} />;
};
