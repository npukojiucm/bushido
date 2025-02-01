'use client';

import { JSX } from 'react';
import { useRouter } from 'next/navigation';
import { ButtonProps } from '@/components/back-components/Button/button.props';

export const Button = ({ type, title, action, ...props }: ButtonProps): JSX.Element => {
  const router = useRouter();

  const routerBack = (): void => router.back();
  const routerCreate = (): void => router.push('/admin/categories/create');

  return (
    <button type={type} {...props} onClick={action == 'cancel' ? routerBack : routerCreate}>
      {title}
    </button>
  );
};
