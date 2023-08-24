import { useQuery } from '@tanstack/react-query';

import Api from 'api/Api';

import Container from 'components/layouts/Container';
import LoadingOverlay from 'components/loader/LoadingOverlay';
import TrianglesList from 'components/lists/TrianglesList';

function Home() {
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

export default Home;
