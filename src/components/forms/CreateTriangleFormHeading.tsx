import { Heading, Flex, Box, Text, Image } from '@chakra-ui/react';

import TriangleSvg from 'assets/labeled-triangle.svg';

function CreateTriangleFormHeading() {
  return (
    <Flex mb={4}>
      <Box>
        <Heading as="h1" size="lg" mb={4}>
          Create Triangle
        </Heading>
        <Text mb={4} color="gray.600" fontStyle="italic">
          To successfully generate triangle please provide name and 3 values including at least one
          side to the following form.
        </Text>
      </Box>

      <Box>
        <Image src={TriangleSvg} height="200px" />
      </Box>
    </Flex>
  );
}

export default CreateTriangleFormHeading;
