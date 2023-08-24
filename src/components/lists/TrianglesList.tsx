import { Box, Accordion } from '@chakra-ui/react';

import { ITrianglesList } from 'components/lists/types';

import TrianglesListHeading from 'components/lists/TrianglesListHeading';
import TrianglesListItem from 'components/lists/TrianglesListItem';

export default function TrianglesList({ triangles }: ITrianglesList) {
  return (
    <Box>
      <TrianglesListHeading />
      <Accordion allowToggle>
        {triangles.map((item) => (
          <TrianglesListItem key={item.id} triangle={item} />
        ))}
      </Accordion>
    </Box>
  );
}
