import { JSX } from 'react';
import { InputFormGroup } from '@/components/back-components/Form/input-form-group/input-form-group';
import { DishFormProps } from '@/components/back-components/DishForm/dish-form.props';
import { SelectFormGroup } from '@/components/back-components/Form/select-form-group/select-form-group';
import Form from 'next/form';
import { dropDownItemsStatus } from '@/utils/table-utils';
import { Button } from '@/components/back-components/Button/button';
import { PickedImage } from '@/components/back-components/PickedImage/picked-image';

export const DishForm = ({
  dish,
  categories,
  formAction,
  ...props
}: DishFormProps): JSX.Element => {
  return (
    <Form action={formAction} {...props}>
      <InputFormGroup
        id={'title'}
        labelTitle={'Наименование'}
        inputType={'text'}
        inputName={'title'}
        inputDefaultValue={dish?.title}
      />

      <PickedImage />

      <InputFormGroup
        id={'price'}
        labelTitle={'Цена'}
        inputType={'number'}
        inputName={'price'}
        inputDefaultValue={dish?.price}
      />

      <InputFormGroup
        id={'weight'}
        labelTitle={'Вес'}
        inputType={'number'}
        inputName={'weight'}
        inputDefaultValue={dish?.weight}
      />

      <InputFormGroup
        id={'count_portion'}
        labelTitle={'Количество порций'}
        inputType={'number'}
        inputName={'count_portion'}
        inputDefaultValue={dish?.count_portion}
      />

      <SelectFormGroup
        id={'category_id'}
        labelTitle={'Категория'}
        selectName={'category_id'}
        defaultSelectValue={String(dish?.category_id)}
        dropdownItems={categories}
      />

      <SelectFormGroup
        id={'is_active'}
        labelTitle={'Статус блюда'}
        selectName={'is_active'}
        defaultSelectValue={String(dish?.is_active)}
        dropdownItems={dropDownItemsStatus}
      />

      <Button type={'submit'} title={'Сохранить'} />
      <Button type={'button'} title={'Отмена'} />
    </Form>
  );
};
