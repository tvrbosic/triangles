import { Box } from '@chakra-ui/react';

import { ITrianglesList } from 'components/lists/types';

import TrianglesListItem from 'components/lists/TrianglesListItem';

function TrianglesList({ triangles }: ITrianglesList) {
  return (
    <Box>
      {triangles.map((item) => (
        <TrianglesListItem triangle={item} />
      ))}
    </Box>
  );
}

export default TrianglesList;
