import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Category } from '@/types';

export interface CategoryFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  category?: Category;
  // eslint-disable-next-line no-unused-vars
  formAction: (formData: FormData) => Promise<void>;
}
