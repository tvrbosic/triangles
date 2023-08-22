import { Flex, Text } from '@chakra-ui/react';

import { ITrianglesListItem } from 'components/lists/types';
import { radiansToDegrees } from 'utils/numbers';

function TrianglesListItem({ triangle }: ITrianglesListItem) {
  return (
    <Flex justifyContent="space-between" gap="20px">
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
  );
}

export default TrianglesListItem;
