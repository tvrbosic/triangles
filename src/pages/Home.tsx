import { useQuery } from '@tanstack/react-query';

import Api from 'api/Api';
import { useAuthContext } from 'context/AuthContext';

import Container from 'components/layouts/Container';
import LoadingOverlay from 'components/loader/LoadingOverlay';
import TrianglesList from 'components/lists/TrianglesList';

export default function Home() {
  const ApiClient = Api.getInstance();
  const { user } = useAuthContext();

  const qGetTriangles = useQuery(['triangles'], () => ApiClient.getTriangles(user?.sub!), {
    enabled: !!user?.sub,
  });

  return (
    <>
      {qGetTriangles.isLoading && <LoadingOverlay />}
      {qGetTriangles.isSuccess && (
        <Container>
          <TrianglesList triangles={qGetTriangles.data} />
        </Container>
      )}
    </>
  );
}
