import { JSX } from 'react';
import { LabelComponentProps } from '@/components/back-components/Form/label/label-component.props';

export const LabelComponent = ({ id, title, ...props }: LabelComponentProps): JSX.Element => {
  return (
    <label htmlFor={id} {...props}>
      {title}
    </label>
  );
};
