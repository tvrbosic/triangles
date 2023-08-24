import { Navigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
