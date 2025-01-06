import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface InputComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type: string;
  id: string;
  name: string;
  defaultValue?: string;
  value?: string;
}
