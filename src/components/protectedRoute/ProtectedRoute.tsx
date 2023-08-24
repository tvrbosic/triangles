import { Navigate, Outlet } from 'react-router-dom';

import routes from 'router/routes';
import { IProtectedRoute } from 'components/protectedRoute/types';

function ProtectedRoute({ token }: IProtectedRoute) {
  if (!token) {
    return <Navigate to={routes.login} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
