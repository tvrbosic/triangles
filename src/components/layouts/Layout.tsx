import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/Header';

const Layout = () => {
  return (
    <Box>
      <Header />
      <main>
        <Outlet />
      </main>
    </Box>
  );
};

export default Layout;
