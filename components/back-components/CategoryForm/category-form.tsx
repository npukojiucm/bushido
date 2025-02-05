import { JSX } from 'react';
import { InputFormGroup } from '@/components/back-components/Form/input-form-group/input-form-group';
import { SelectFormGroup } from '@/components/back-components/Form/select-form-group/select-form-group';
import Form from 'next/form';
import { dropDownItemsStatus } from '@/utils/table-utils';
import { Button } from '@/components/back-components/Button/button';
import { CategoryFormProps } from '@/components/back-components/CategoryForm/category-form.props';

export const CategoryForm = ({ category, formAction }: CategoryFormProps): JSX.Element => {
  return (
    <>
      <Form action={formAction}>
        <InputFormGroup
          id={'title'}
          inputType={'text'}
          inputName={'title'}
          inputDefaultValue={category?.title}
          labelTitle={'Наименование'}
        />

        <SelectFormGroup
          id={'is_active'}
          labelTitle={'Статус категории'}
          selectName={'is_active'}
          defaultSelectValue={String(category?.is_active ?? 0)}
          dropdownItems={dropDownItemsStatus}
        />

        <Button type={'submit'} title={'Сохранить'} />
        <Button type={'button'} title={'Отмена'} action={'cancel'} />
      </Form>
    </>
  );
};
