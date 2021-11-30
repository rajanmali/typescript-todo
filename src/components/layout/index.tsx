import { FC } from 'react';

// Components
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
