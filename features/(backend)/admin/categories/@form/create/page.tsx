import { JSX } from 'react';
import { FormComponent } from '@/components/back-components/Form/form-component';
import { InputFormGroup } from '@/components/back-components/Form/input-form-group/input-form-group';
import { SelectFormGroup } from '@/components/back-components/Form/select-form-group/select-form-group';

export const CreateCategoryPage = (): JSX.Element => {
  const dropdownItems = [
    { value: '1', title: 'Активна' },
    { value: '0', title: 'Неактивна' },
  ];

  return (
    <FormComponent>
      <InputFormGroup
        id={'title'}
        inputType={'text'}
        inputName={'title'}
        labelTitle={'Наименование'}
      />

      <SelectFormGroup
        id={'isActive'}
        labelTitle={'Статус категории'}
        selectName={'isActive'}
        selectValue={'0'}
        dropdownItems={dropdownItems}
      />
    </FormComponent>
  );
};
