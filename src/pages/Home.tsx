import { useQuery } from '@tanstack/react-query';

import Api from 'api/Api';

import Container from 'components/layouts/Container';
import LoadingOverlay from 'components/loader/LoadingOverlay';
import TrianglesList from 'components/lists/TrianglesList';

export default function Home() {
  const ApiClient = Api.getInstance();
  const qGetTriangles = useQuery(['triangles'], () => ApiClient.getTriangles());

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
