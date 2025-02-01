'use client';

import { JSX, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ children }: { children: ReactNode }): JSX.Element => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  return createPortal(
    <div>
      <dialog ref={dialogRef}>{children}</dialog>
    </div>,
    document.getElementById('modal-root')!,
  );
};
