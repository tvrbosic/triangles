import { useQuery } from '@tanstack/react-query';

import Api from 'api/Api';

import Container from 'components/layouts/Container';
import TrianglesList from 'components/lists/TrianglesList';

function Home() {
  const ApiClient = Api.getInstance();
  const qGetTriangles = useQuery(['triangles'], ApiClient.getTriangles);

  return (
    <Container>
      {qGetTriangles.isLoading && <div>Loading...</div>}
      {qGetTriangles.isSuccess && <TrianglesList triangles={qGetTriangles.data} />}
    </Container>
  );
}

export default Home;
