import { Box } from '@chakra-ui/react';

import { ITriangleObject, EGenerateTriangleMethods } from 'types/common';
import { Triangle } from 'classes/Triangle';

import TrianglesList from 'components/lists/TrianglesList';

const mockData: ITriangleObject[] = [
  {
    id: 1,
    name: 'Triangle 1',
    dateCreated: new Date().toISOString(),
    data: new Triangle(1, 1, 30, EGenerateTriangleMethods.SSA).data,
  },
  {
    id: 2,
    name: 'Triangle 2',
    dateCreated: new Date().toISOString(),
    data: new Triangle(2, 2, 45, EGenerateTriangleMethods.SSA).data,
  },
  {
    id: 3,
    name: 'Triangle 3',
    dateCreated: new Date().toISOString(),
    data: new Triangle(3, 3, 70, EGenerateTriangleMethods.SSA).data,
  },
  {
    id: 4,
    name: 'Triangle 4',
    dateCreated: new Date().toISOString(),
    data: new Triangle(15, 20, 130, EGenerateTriangleMethods.SSA).data,
  },
  {
    id: 5,
    name: 'Triangle 5',
    dateCreated: new Date().toISOString(),
    data: new Triangle(10, 30, 90, EGenerateTriangleMethods.SSA).data,
  },
  {
    id: 6,
    name: 'Triangle 6',
    dateCreated: new Date().toISOString(),
    data: new Triangle(130, 15, 1, EGenerateTriangleMethods.AAS).data,
  },
  {
    id: 7,
    name: 'Triangle 7',
    dateCreated: new Date().toISOString(),
    data: new Triangle(10, 15, 15, EGenerateTriangleMethods.SSS).data,
  },
  {
    id: 8,
    name: 'Triangle 8',
    dateCreated: new Date().toISOString(),
    data: new Triangle(11.3, 2.2, 10, EGenerateTriangleMethods.SSS).data,
  },
  {
    id: 8,
    name: 'Triangle 8',
    dateCreated: new Date().toISOString(),
    data: new Triangle(10, 10, 10, EGenerateTriangleMethods.SSS).data,
  },
];

function Home() {
  return (
    <Box bgColor="white">
      <TrianglesList triangles={mockData} />
    </Box>
  );
}

export default Home;
