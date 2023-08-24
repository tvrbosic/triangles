import { Box, Flex, Stack, Text, Link } from '@chakra-ui/react';

import { useAuthContext } from 'context/AuthContext';
import routes from 'router/routes';

import Navigation from 'components/header/Navigation';

export default function Header() {
  const { user, clearAuthToken } = useAuthContext();

  const logoutHandler = () => {
    clearAuthToken();
  };

  return (
    <Box px={8} py={5} bg="gray.700" color="white">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="20px" fontWeight="bold">
          Visual Triangles
        </Text>

        {user && (
          <>
            <Navigation />

            <Stack alignItems="end">
              <Flex>
                <Text fontSize="sm" mr="5px">
                  Logged in as:
                </Text>
                <Text fontSize="sm" textDecor="underline">
                  {user.email}
                </Text>
              </Flex>
              <Link fontSize="sm" onClick={logoutHandler}>
                Logout
              </Link>
            </Stack>
          </>
        )}
      </Flex>
    </Box>
  );
}
