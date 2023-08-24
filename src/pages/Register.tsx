import { useState, useEffect } from 'react';
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
import { validateEmail } from 'utils/validations';

import InfoModal from 'components/modals/InfoModal';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const ApiClient = Api.getInstance();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Register query object
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

  const checkInputsValid = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email address!');
      return false;
    }

    if (password.length < 4) {
      setErrorMessage('Password must be at least 4 characters long!');
      return false;
    }

    if (password !== repeatedPassword) {
      setErrorMessage('Passwords do not match!');
      return false;
    }

    setErrorMessage(null);
    return true;
  };

  const registerHandler = () => {
    if (!checkInputsValid()) return;
    qRegisterUser.mutate();
  };

  const backToLoginHandler = () => {
    navigate(routes.login);
  };

  const closeModalHandler = () => {
    onClose();
    navigate(routes.login);
  };

  useEffect(() => {
    if (qRegisterUser.isError) {
      setErrorMessage('Error processing request. Try again with different credentials!');
    }
  }, [qRegisterUser.isError]);

  return (
    <AbsoluteCenter>
      <Stack align="center" mb={6}>
        <Heading size="xl">Register</Heading>
      </Stack>

      <Box rounded="lg" bg="white" boxShadow="lg" p={8} minW={500}>
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

          <Stack spacing={6}>
            <Link colorScheme="teal" textAlign={'center'} onClick={backToLoginHandler}>
              Back to login page
            </Link>

            <Button colorScheme="teal" onClick={registerHandler}>
              Submit
            </Button>
          </Stack>

          <Box minHeight="27px" mt="5px">
            {errorMessage && (
              <Text color="crimson" align="center">
                {errorMessage}
              </Text>
            )}
          </Box>
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
