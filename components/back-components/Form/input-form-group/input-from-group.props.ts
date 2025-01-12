import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface InputFromGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  labelTitle: string;
  inputType: 'text' | 'number' | 'hidden';
  inputName: string;
  inputDefaultValue?: string | number;
}
