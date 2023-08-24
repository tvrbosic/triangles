import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  AbsoluteCenter,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import Api from 'api/Api';
import routes from 'router/routes';

import InfoModal from 'components/modals/InfoModal';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const ApiClient = Api.getInstance();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const qRegisterUser = useMutation(
    () =>
      ApiClient.postRegister({
        email: email,
        password: password,
      }),
    {
      onSuccess: () => onOpen(),
    }
  );

  const signInHandler = () => {
    qRegisterUser.mutate();
  };

  const backToLoginHandler = () => {
    navigate(routes.login);
  };

  const closeModalHandler = () => {
    onClose();
    navigate(routes.login);
  };

  return (
    <AbsoluteCenter>
      <Stack align="center" mb={6}>
        <Heading size="xl">Register</Heading>
      </Stack>

      <Box rounded="lg" bg="white" boxShadow="lg" p={8} minW={350}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter email..."
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Enter password..."
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl id="repeatedPassword">
            <FormLabel>Repeat password</FormLabel>
            <Input
              placeholder="Repeat password..."
              value={repeatedPassword}
              type="password"
              onChange={(e) => setRepeatedPassword(e.target.value)}
            />
          </FormControl>

          <Stack spacing={10}>
            <Link colorScheme="teal" textAlign={'center'} onClick={backToLoginHandler}>
              Back to login page
            </Link>
            {qRegisterUser.isError && (
              <Text color="crimson" align="center">
                Error procesing request!
              </Text>
            )}
            <Button colorScheme="teal" onClick={signInHandler}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>

      <InfoModal
        title="Creation successfull"
        content={<Text>User successfull created!</Text>}
        isOpen={isOpen}
        onClose={closeModalHandler}
      />
    </AbsoluteCenter>
  );
}
