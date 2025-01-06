import { JSX } from 'react';
import { OptionComponentProps } from '@/components/back-components/Form/option/option-component.props';

export const OptionComponent = ({ value, title, ...props }: OptionComponentProps): JSX.Element => {
  return (
    <option value={value} {...props}>
      {title}
    </option>
  );
};
