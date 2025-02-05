import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Category, DropDownItemStatus } from '@/types';

export interface SelectFromGroupProps<T extends DropDownItemStatus | Category>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  labelTitle: string;
  selectName: string;
  defaultSelectValue: string;
  dropdownItems: T[];
  [key: string]: any;
}
