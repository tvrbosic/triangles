import { Flex } from '@chakra-ui/react';

import { EGenerateTriangleMethods } from 'types/common';
import { Triangle } from 'classes/Triangle';

import TrianglesList from 'components/lists/TrianglesList';

const mockData: Triangle[] = [
  new Triangle(1, 1, 30, EGenerateTriangleMethods.SSA),
  new Triangle(2, 2, 45, EGenerateTriangleMethods.SSA),
  new Triangle(3, 3, 70, EGenerateTriangleMethods.SSA),
  new Triangle(15, 20, 130, EGenerateTriangleMethods.SSA),
  new Triangle(10, 30, 90, EGenerateTriangleMethods.SSA),
  new Triangle(130, 15, 1, EGenerateTriangleMethods.AAS),
  new Triangle(10, 15, 15, EGenerateTriangleMethods.SSS),
  new Triangle(11.3, 2.2, 10, EGenerateTriangleMethods.SSS),
  new Triangle(10, 10, 10, EGenerateTriangleMethods.SSS),
];

function Home() {
  return (
    <Flex>
      <TrianglesList triangles={mockData} />
    </Flex>
  );
}

export default Home;
