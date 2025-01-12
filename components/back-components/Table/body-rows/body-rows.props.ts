import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Category, DishWithCategory } from '@/types';

export interface BodyRowsProps<T extends DishWithCategory | Category>
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  rowItems: T[];
}
