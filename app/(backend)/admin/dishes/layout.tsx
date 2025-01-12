import { JSX, ReactNode } from 'react';

const Layout = ({
  children,
  dishModal,
}: {
  children: ReactNode;
  dishModal: ReactNode;
}): JSX.Element => {
  return (
    <main>
      {children} {dishModal}{' '}
    </main>
  );
};

export default Layout;
