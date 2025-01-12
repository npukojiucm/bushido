import { JSX } from 'react';
import { FormComponent } from '@/components/back-components/Form/form-component';
import { InputFormGroup } from '@/components/back-components/Form/input-form-group/input-form-group';
import { SelectFormGroup } from '@/components/back-components/Form/select-form-group/select-form-group';
import { dropDownItemsStatus } from '@/utils/table-utils';

export const CreateCategoryPage = (): JSX.Element => {
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
        dropdownItems={dropDownItemsStatus}
      />
    </FormComponent>
  );
};
