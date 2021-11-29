import { FC } from 'react';

// Components
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
