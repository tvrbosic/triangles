import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/Header';

const Layout = () => {
  return (
    <Box bgColor="gray.100" minHeight="100vh">
      <Header />
      <Box py={8} px={16}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
