import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Category, DishWithCategory } from '@/types';

export interface DishFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  dish?: DishWithCategory;
  categories: Category[];
}
