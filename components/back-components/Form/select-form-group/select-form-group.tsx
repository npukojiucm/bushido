import { JSX } from 'react';
import { SelectFromGroupProps } from '@/components/back-components/Form/select-form-group/select-from-group.props';
import { LabelComponent } from '@/components/back-components/Form/label/label-component';
import { SelectComponent } from '@/components/back-components/Form/select/select-component';
import { OptionComponent } from '@/components/back-components/Form/option/option-component';

export const SelectFormGroup = ({
  id,
  labelTitle,
  selectName,
  selectValue,
  dropdownItems,
  ...props
}: SelectFromGroupProps): JSX.Element => {
  const options = dropdownItems.map((option) => (
    <OptionComponent value={option.value} title={option.title} />
  ));

  return (
    <div {...props}>
      <LabelComponent id={id} title={labelTitle} />
      <SelectComponent id={id} name={selectName} value={selectValue} children={options} />
    </div>
  );
};
