import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import routes from 'router/routes';

import Navigation from 'components/header/Navigation';

export default function Header() {
  const navigate = useNavigate();

  const addTriangleHandler = () => {
    navigate(routes.createTriangle);
  };

  return (
    <Box px={8} py={5} bg="gray.700" color="white">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="20px" fontWeight="bold">
          Triangles App
        </Text>
        <Navigation />
        <Button colorScheme="teal" size="sm" onClick={addTriangleHandler}>
          Create triangle
        </Button>
      </Flex>
    </Box>
  );
}
