import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: 'button' | 'submit';
  title: string;
  action?: 'submit' | 'cancel' | 'create';
}
