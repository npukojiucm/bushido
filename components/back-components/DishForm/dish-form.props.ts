import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Category, DishWithCategory } from '@/types';

export interface DishFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  dish?: DishWithCategory;
  categories: Category[];
  // eslint-disable-next-line no-unused-vars
  formAction: (formData: FormData) => Promise<void>;
}
