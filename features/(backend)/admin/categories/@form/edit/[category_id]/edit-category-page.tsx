import { EditCategoryPageProps } from '@/features/(backend)/admin/categories/@form/edit/[category_id]/edit-category-page.props';
import { JSX } from 'react';
import { FormComponent } from '@/components/back-components/Form/form-component';
import { InputFormGroup } from '@/components/back-components/Form/input-form-group/input-form-group';
import { getCategoryById } from '@/libs/db/categories/get-category-by-id';
import { InputComponent } from '@/components/back-components/Form/input/input-component';
import { SelectFormGroup } from '@/components/back-components/Form/select-form-group/select-form-group';
import { dropDownItems } from '@/utils/table-utils';

export const EditCategoryPage = async ({ params }: EditCategoryPageProps): Promise<JSX.Element> => {
  const category_id = (await params).category_id;
  const category = await getCategoryById(+category_id);

  return (
    <FormComponent>
      <InputComponent type={'hidden'} id={category_id} name={'category_id'} />

      <InputFormGroup
        id={'title'}
        labelTitle={'Наименование'}
        inputType={'text'}
        inputName={'title'}
        inputDefaultValue={category?.title}
      />

      <SelectFormGroup
        id={'isActive'}
        labelTitle={'Статус категории'}
        selectName={'isActive'}
        selectValue={`${category?.is_active}`}
        dropdownItems={dropDownItems}
      />
    </FormComponent>
  );
};
