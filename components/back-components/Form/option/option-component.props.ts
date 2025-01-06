import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface OptionComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLOptionElement>, HTMLOptionElement> {
  value: string;
  title: string;
}
