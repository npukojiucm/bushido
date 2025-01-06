import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface FormComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  children: ReactNode;
}
