import { Route, Routes } from 'react-router-dom';

import routes from 'router/routes';
import ProtectedRoute from 'components/protectedRoute/ProtectedRoute';
import { useAuthContext } from 'context/AuthContext';

import Layout from 'components/layouts/Layout';
import Login from 'pages/Login';
import Home from 'pages/Home';
import CreateTriangle from 'pages/CreateTriangle';
import EditTriangle from 'pages/EditTriangle';

export default function Router() {
  const { token } = useAuthContext();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<ProtectedRoute token={token} />}>
          <Route index path={routes.home} element={<Home />} />
          <Route path={routes.createTriangle} element={<CreateTriangle />} />
          <Route path={routes.editTriangle} element={<EditTriangle />} />
        </Route>
        <Route path={routes.login} element={<Login />} />
      </Route>
    </Routes>
  );
}
