import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { OptionComponentProps } from '@/components/back-components/Form/option/option-component.props';

export interface SelectFromGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  labelTitle: string;
  selectName: string;
  selectValue: string;
  dropdownItems: OptionComponentProps[];
}
