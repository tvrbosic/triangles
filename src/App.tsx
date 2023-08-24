import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthContextProvider } from 'context/AuthContext';
import Router from 'router/Router';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </AuthContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
