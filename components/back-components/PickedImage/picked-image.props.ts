import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PickedImageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageLink?: string;
  altImage?: string;
}
