import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/Header';

const Layout = () => {
  return (
    <Flex flexDir="column">
      <Header />
      <main>
        <Outlet />
      </main>
    </Flex>
  );
};

export default Layout;
