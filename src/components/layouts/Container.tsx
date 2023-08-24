import { Box } from '@chakra-ui/react';

import { IContainerProps } from './types';

export default function Container({ children }: IContainerProps) {
  return (
    <Box bg="white" borderRadius={6} px={8} py={10}>
      {children}
    </Box>
  );
}
