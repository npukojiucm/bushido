import { JSX } from 'react';
import { SelectComponentProps } from '@/components/back-components/Form/select/select-component.props';

export const SelectComponent = ({
  id,
  name,
  value,
  children,
  ...props
}: SelectComponentProps): JSX.Element => {
  return (
    <select id={id} name={name} value={value} size={1} {...props}>
      {children}
    </select>
  );
};
