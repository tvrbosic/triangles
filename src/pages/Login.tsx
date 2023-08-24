import { useEffect, useState } from 'react';
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
} from '@chakra-ui/react';

import { useAuthContext } from 'context/AuthContext';
import Api from 'api/Api';
import routes from 'router/routes';
import { validateEmail } from 'utils/validations';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const ApiClient = Api.getInstance();
  const { user, setAuthToken } = useAuthContext();
  const navigate = useNavigate();

  const qLoginUser = useMutation(
    () =>
      ApiClient.postLogin({
        email: email,
        password: password,
      }),
    {
      onSuccess: (data) => {
        setAuthToken(data.accessToken);
      },
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

    setErrorMessage(null);
    return true;
  };

  const registerHandler = () => {
    navigate(routes.register);
  };

  const signInHandler = () => {
    if (!checkInputsValid()) return;
    qLoginUser.mutate();
  };

  useEffect(() => {
    if (user) {
      navigate(routes.home);
    }
  }, [user, navigate]);

  useEffect(() => {
    if (qLoginUser.isError) {
      setErrorMessage('Error processing request. Check credentials and try again!');
    }
  }, [qLoginUser.isError]);

  return (
    <AbsoluteCenter>
      <Stack align="center" mb={6}>
        <Heading size="xl">Sign in</Heading>
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

          <Stack spacing={6}>
            <Link colorScheme="teal" textAlign={'center'} onClick={registerHandler}>
              Register a new account
            </Link>

            <Button colorScheme="teal" onClick={signInHandler}>
              Sign in
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
    </AbsoluteCenter>
  );
}
