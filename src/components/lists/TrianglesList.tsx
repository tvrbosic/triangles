import { Box, Accordion } from '@chakra-ui/react';

import { ITrianglesList } from 'components/lists/types';

import TrianglesListHeading from 'components/lists/TrianglesListHeading';
import TrianglesListItem from 'components/lists/TrianglesListItem';

function TrianglesList({ triangles }: ITrianglesList) {
  return (
    <Box>
      <TrianglesListHeading />
      <Accordion allowToggle>
        {triangles.map((item) => (
          <TrianglesListItem triangle={item} />
        ))}
      </Accordion>
    </Box>
  );
}

export default TrianglesList;
