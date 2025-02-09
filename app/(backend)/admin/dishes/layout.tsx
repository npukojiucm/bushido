import { JSX, ReactNode } from 'react';

const Layout = ({ children, modal }: { children: ReactNode; modal: ReactNode }): JSX.Element => {
  return (
    <>
      {children}
      {modal}
      <div id="modal-root" />
    </>
  );
};

export default Layout;
