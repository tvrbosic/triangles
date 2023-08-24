import { Route, Routes } from 'react-router-dom';

import routes from 'router/routes';
import ProtectedRoute from 'components/protectedRoute/ProtectedRoute';

import Layout from 'components/layouts/Layout';
import Login from 'pages/Login';
import Home from 'pages/Home';
import CreateTriangle from 'pages/CreateTriangle';
import EditTriangle from 'pages/EditTriangle';

export default function Router() {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path={routes.createTriangle}
          element={
            <ProtectedRoute>
              <CreateTriangle />
            </ProtectedRoute>
          }
        />
        <Route path={routes.editTriangle} element={<EditTriangle />} />
        <Route path={routes.login} element={<Login />} />
      </Route>
    </Routes>
  );
}
