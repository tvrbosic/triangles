import { Route, Routes } from 'react-router-dom';

import routes from 'router/routes';
import ProtectedRoute from 'components/protectedRoute/ProtectedRoute';
import { useAuthContext } from 'context/AuthContext';

import Layout from 'components/layouts/Layout';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Home from 'pages/Home';
import GenerateTriangle from 'pages/GenerateTriangle';

export default function Router() {
  const { token } = useAuthContext();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<ProtectedRoute token={token} />}>
          <Route index path={routes.home} element={<Home />} />
          <Route path={routes.generateTriangle} element={<GenerateTriangle />} />
        </Route>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
      </Route>
    </Routes>
  );
}
