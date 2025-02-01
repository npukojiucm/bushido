'use server';

import { JSX } from 'react';
import Form from 'next/form';
import { InputFormGroup } from '@/components/back-components/Form/input-form-group/input-form-group';
import { SelectFormGroup } from '@/components/back-components/Form/select-form-group/select-form-group';
import { dropDownItemsStatus } from '@/utils/table-utils';
import { createCategoryAction } from '@/utils/form/form-actions/create-category-action';
import { Button } from '@/components/back-components/Button/button';

const CreateCategoryPage = async (): Promise<JSX.Element> => {
  return (
    <>
      <Form action={createCategoryAction}>
        <InputFormGroup
          id={'title'}
          inputType={'text'}
          inputName={'title'}
          labelTitle={'Наименование'}
        />

        <SelectFormGroup
          id={'is_active'}
          labelTitle={'Статус категории'}
          selectName={'is_active'}
          defaultSelectValue={'0'}
          dropdownItems={dropDownItemsStatus}
        />

        <Button type={'submit'} title={'Сохранить'} />
        <Button type={'button'} title={'Отмена'} action={'cancel'} />
      </Form>
    </>
  );
};

export default CreateCategoryPage;
