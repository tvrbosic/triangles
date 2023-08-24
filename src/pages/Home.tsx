import { useQuery } from '@tanstack/react-query';

import { getTriangles } from 'api/triangles';

import Container from 'components/layouts/Container';
import TrianglesList from 'components/lists/TrianglesList';

function Home() {
  const qGetTriangles = useQuery(['triangles'], getTriangles);

  return (
    <Container>
      {qGetTriangles.isLoading && <div>Loading...</div>}
      {qGetTriangles.isSuccess && <TrianglesList triangles={qGetTriangles.data} />}
    </Container>
  );
}

export default Home;
