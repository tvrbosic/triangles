import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';

import { IAuthContext, IAuthProvider } from 'context/types';
import { IUser } from 'types/user';
import { parseJwt } from 'utils/utils';

const initialState = {
  token: '',
  user: null,
  setAuthToken: () => {},
  clearAuthToken: () => {},
};

const AuthContext = createContext<IAuthContext>(initialState);

// Custom hook to use AuthContext
export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({ ...children }: IAuthProvider) {
  const [appUser, setAppUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string>('');
  const [loadingToken, setLoadingToken] = useState<boolean>(true);

  // On application start check if user token already exists in local storage and set it to context
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
    setLoadingToken(false);
  }, []);

  // Extract singed in user data and set to context on every token change
  useEffect(() => {
    if (token) {
      const user = parseJwt(token);
      setAppUser(user);
    }
  }, [token]);

  // Set user to state and local storage (function to be used in application)
  const setAuthToken = useCallback((jwtToken: string) => {
    // Set token to app
    setToken(jwtToken);
    // Set token to local storage
    localStorage.setItem('token', jwtToken);
  }, []);

  // Clear user from state and token from local storage (function to be used in application)
  const clearAuthToken = useCallback(() => {
    setToken('');
    setAppUser(null);
    localStorage.setItem('token', '');
  }, []);

  // Prepare context object which will be used and accessed throughout application
  // Memoize authContextObject to prevent unnecessary re-renders
  const authContextObject = useMemo(
    () => ({
      token,
      user: appUser,
      setAuthToken,
      clearAuthToken,
    }),
    [token, appUser, setAuthToken, clearAuthToken]
  );
  return loadingToken ? null : <AuthContext.Provider value={authContextObject} {...children} />;
}
