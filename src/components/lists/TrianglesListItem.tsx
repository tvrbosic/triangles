import { AccordionItem, AccordionButton, AccordionIcon, Flex } from '@chakra-ui/react';

import { ITrianglesListItem } from 'components/lists/types';

import TrianglesListItemExpand from 'components/lists/TrianglesListItemExpand';

function TrianglesListItem({ triangle }: ITrianglesListItem) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: 'blackAlpha.50' }}>
          <Flex flexGrow={1}>
            <Flex w="10%" pl={3}>
              {triangle.id}
            </Flex>
            <Flex flexGrow={1} pl={3}>
              {new Date(triangle.dateCreated).toLocaleDateString()}
            </Flex>
            <Flex w="25%" pl={3}>
              {triangle.data.typeBySides}
            </Flex>
            <Flex w="25%" pl={3}>
              {triangle.data.typeByAngles}
            </Flex>
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </h2>

      <TrianglesListItemExpand triangle={triangle} />
    </AccordionItem>
  );
}

export default TrianglesListItem;
