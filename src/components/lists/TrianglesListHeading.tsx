import { Box, Flex, Text } from '@chakra-ui/react';

function TrianglesListHeading() {
  return (
    <Flex px={4} py={2} fontWeight="bold">
      <Text w="10%" pl={2}>
        ID
      </Text>
      <Text flexGrow={1} pl={2}>
        CREATED
      </Text>
      <Text w="25%" pl={2}>
        TYPE BY SIDE
      </Text>
      <Text w="25%" pl={2}>
        TYPE BY ANGLE
      </Text>
      <Box w="20px" />
    </Flex>
  );
}

export default TrianglesListHeading;
