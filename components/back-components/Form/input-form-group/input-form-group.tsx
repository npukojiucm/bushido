import { JSX } from 'react';
import { InputFromGroupProps } from '@/components/back-components/Form/input-form-group/input-from-group.props';

export const InputFormGroup = ({
  id,
  labelTitle,
  inputType,
  inputName,
  inputDefaultValue,
  ...props
}: InputFromGroupProps): JSX.Element => {
  return (
    <div {...props}>
      <label htmlFor={id}>{labelTitle}</label>
      <input type={inputType} id={id} name={inputName} defaultValue={inputDefaultValue} />
    </div>
  );
};
