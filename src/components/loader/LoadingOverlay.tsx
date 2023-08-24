import { AbsoluteCenter, Box, Spinner } from '@chakra-ui/react';

export default function LoadingOverlay() {
  return (
    <Box
      position="fixed"
      display="block"
      top={0}
      left={0}
      minW="100vw"
      minH="100vh"
      bg="blackAlpha.500"
    >
      <AbsoluteCenter>
        <Spinner size="lg" />
      </AbsoluteCenter>
    </Box>
  );
}
