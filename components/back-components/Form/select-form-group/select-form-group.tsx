import { JSX } from 'react';
import { SelectFromGroupProps } from '@/components/back-components/Form/select-form-group/select-from-group.props';
import { OptionComponent } from '@/components/back-components/Form/option/option-component';
import { Category, DropDownItemStatus } from '@/types';
import { isCategory } from '@/utils/table-utils';

export const SelectFormGroup = <T extends DropDownItemStatus | Category>({
  id,
  labelTitle,
  defaultSelectValue,
  dropdownItems,
  ...props
}: SelectFromGroupProps<T>): JSX.Element => {
  return (
    <div {...props}>
      <label htmlFor={id}>{labelTitle}</label>

      <select defaultValue={defaultSelectValue}>
        {isCategory(dropdownItems[0]) && <option value={''}>Выберите категорию:</option>}

        {dropdownItems.map((option) => (
          <OptionComponent
            key={isCategory(option) ? String(option.id) : option.value}
            value={isCategory(option) ? String(option.id) : option.value}
            title={option.title}
          />
        ))}
      </select>
    </div>
  );
};
