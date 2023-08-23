import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/Header';

const Layout = () => {
  return (
    <Box bgColor="gray.50">
      <Header />
      <Box p={4}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
