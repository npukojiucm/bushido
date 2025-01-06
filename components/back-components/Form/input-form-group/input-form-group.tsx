import { JSX } from 'react';
import { InputComponent } from '@/components/back-components/Form/input/input-component';
import { LabelComponent } from '@/components/back-components/Form/label/label-component';
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
      <LabelComponent id={id} title={labelTitle} />
      <InputComponent type={inputType} id={id} name={inputName} defaultValue={inputDefaultValue} />
    </div>
  );
};
