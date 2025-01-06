import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LabelComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  id: string;
  title: string;
}
