import { JSX } from 'react';
import { FormComponent } from '@/components/back-components/Form/form-component';
import { InputFormGroup } from '@/components/back-components/Form/input-form-group/input-form-group';
import { DishFormProps } from '@/components/back-components/DishForm/dish-form.props';
import Image from 'next/image';
import { SelectFormGroup } from '@/components/back-components/Form/select-form-group/select-form-group';

export const DishForm = ({ dish, categories, ...props }: DishFormProps): JSX.Element => {
  return (
    <FormComponent {...props}>
      {dish?.id && (
        <input type={'hidden'} id={'dish_id'} name={'dish_id'} defaultValue={String(dish.id)} />
      )}

      <InputFormGroup
        id={'title'}
        labelTitle={'Наименование'}
        inputType={'text'}
        inputName={'title'}
        inputDefaultValue={dish?.title}
      />

      <Image
        src={'/assets/1'}
        alt={dish?.title || 'Изображение отсутствует'}
        width={300}
        height={300}
      />

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
        defaultSelectValue={String(dish?.category_id)}
        dropdownItems={categories}
      />
    </FormComponent>
  );
};
