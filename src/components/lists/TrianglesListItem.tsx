import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';

import { ITrianglesListItem } from 'components/lists/types';
import { radiansToDegrees } from 'utils/numbers';

function TrianglesListItem({ triangle }: ITrianglesListItem) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Flex flexGrow={1}>
            <Flex w="10%" pl={3}>
              {triangle.id}
            </Flex>
            <Flex flexGrow={1} pl={3}>
              {triangle.name}
            </Flex>
            <Flex w="15%" pl={3}>
              {new Date(triangle.dateCreated).toLocaleDateString()}
            </Flex>
            <Flex w="15%" pl={3}>
              {triangle.data.typeBySides}
            </Flex>
            <Flex w="15%" pl={3}>
              {triangle.data.typeByAngles}
            </Flex>
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </h2>

      <AccordionPanel pb={4}>
        <Flex justifyContent="space-between" gap="20px">
          <Box>
            <Flex gap="5px">
              <Text>A: </Text>
              <Text>{triangle.data.sides![0]}</Text>
            </Flex>
            <Flex gap="5px">
              <Text>B: </Text>
              <Text>{triangle.data.sides![1]}</Text>
            </Flex>
            <Flex gap="5px">
              <Text>C: </Text>
              <Text>{triangle.data.sides![2]}</Text>
            </Flex>
          </Box>

          <Box>
            <Flex gap="5px">
              <Text>Angle A: </Text>
              <Text>{radiansToDegrees(triangle.data.angles![0])}</Text>
            </Flex>
            <Flex gap="5px">
              <Text>Angle B: </Text>
              <Text>{radiansToDegrees(triangle.data.angles![1])}</Text>
            </Flex>
            <Flex gap="5px">
              <Text>Angle C: </Text>
              <Text>{radiansToDegrees(triangle.data.angles![2])}</Text>
            </Flex>
          </Box>

          <Box>
            <Flex gap="5px">
              <Text>Perimeter: </Text>
              <Text>{triangle.data.perimeter}</Text>
            </Flex>
            <Flex gap="5px">
              <Text>Area: </Text>
              <Text>{triangle.data.area}</Text>
            </Flex>
          </Box>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default TrianglesListItem;

/**
 * 
 * <Flex justifyContent="space-between" gap="20px">
      <Flex gap="5px">
        <Text>Type by side: </Text>
        <Text>{triangle.typeBySides}</Text>
      </Flex>
      <Flex gap="5px">
        <Text>Type by angle: </Text>
        <Text>{triangle.typeByAngles}</Text>
      </Flex>

      <Flex gap="5px">
        <Text>A: </Text>
        <Text>{triangle.sides![0]}</Text>
      </Flex>
      <Flex gap="5px">
        <Text>B: </Text>
        <Text>{triangle.sides![1]}</Text>
      </Flex>
      <Flex gap="5px">
        <Text>C: </Text>
        <Text>{triangle.sides![2]}</Text>
      </Flex>

      <Flex gap="5px">
        <Text>Angle A: </Text>
        <Text>{radiansToDegrees(triangle.angles![0])}</Text>
      </Flex>
      <Flex gap="5px">
        <Text>Angle B: </Text>
        <Text>{radiansToDegrees(triangle.angles![1])}</Text>
      </Flex>
      <Flex gap="5px">
        <Text>Angle C: </Text>
        <Text>{radiansToDegrees(triangle.angles![2])}</Text>
      </Flex>

      <Flex gap="5px">
        <Text>Perimeter: </Text>
        <Text>{triangle.perimeter}</Text>
      </Flex>

      <Flex gap="5px">
        <Text>Area: </Text>
        <Text>{triangle.area}</Text>
      </Flex>
    </Flex>
 */
