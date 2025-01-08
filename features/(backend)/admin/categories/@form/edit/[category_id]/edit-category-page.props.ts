import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface EditCategoryPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  params: Promise<{ category_id: string }>;
}
