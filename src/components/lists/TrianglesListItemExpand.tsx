import { useEffect } from 'react';
import {
  AccordionPanel,
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Stack,
  StackDivider,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ITrianglesListItemExpand } from 'components/lists/types';
import { radiansToDegrees } from 'utils/numbers';
import Api from 'api/Api';

import TriangleCanvas from 'components/canvas/TriangleCanvas';
import LoadingOverlay from 'components/loader/LoadingOverlay';
import InfoModal from 'components/modals/InfoModal';

function TrianglesListItemExpand({ triangle }: ITrianglesListItemExpand) {
  const ApiClient = Api.getInstance();
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const qDeleteTriangle = useMutation(() => ApiClient.deleteTriangle(triangle.id!));

  const deleteHandler = () => {
    qDeleteTriangle.mutate();
  };

  const closeModalHandler = () => {
    onClose();
    queryClient.invalidateQueries(['triangles']);
  };

  useEffect(() => {
    if (qDeleteTriangle.isSuccess) {
      onOpen();
    }
  }, [qDeleteTriangle.isSuccess, onOpen]);

  return (
    <>
      <AccordionPanel px={8} pb={6} w="100%">
        <Flex gap={8}>
          <Stack width="49%" divider={<StackDivider />} spacing={3}>
            <Box>
              <Heading size="md" mb={2}>
                Sides
              </Heading>
              <Flex gap="5px">
                <Text fontWeight="bold">a: </Text>
                <Text>{triangle.data.sides![0]}</Text>
              </Flex>
              <Flex gap="5px">
                <Text fontWeight="bold">b: </Text>
                <Text>{triangle.data.sides![1]}</Text>
              </Flex>
              <Flex gap="5px">
                <Text fontWeight="bold">c: </Text>
                <Text>{triangle.data.sides![2]}</Text>
              </Flex>
            </Box>

            <Box>
              <Heading size="md" mb={2}>
                Angles
              </Heading>
              <Flex gap="5px">
                <Text fontWeight="bold">A: </Text>
                <Text>{radiansToDegrees(triangle.data.angles![0])}</Text>
              </Flex>
              <Flex gap="5px">
                <Text fontWeight="bold">B: </Text>
                <Text>{radiansToDegrees(triangle.data.angles![1])}</Text>
              </Flex>
              <Flex gap="5px">
                <Text fontWeight="bold">C: </Text>
                <Text>{radiansToDegrees(triangle.data.angles![2])}</Text>
              </Flex>
            </Box>

            <Box>
              <Heading size="md" mb={2}>
                Calculated
              </Heading>
              <Flex gap="5px">
                <Text fontWeight="bold">Perimeter: </Text>
                <Text>{triangle.data.perimeter}</Text>
              </Flex>
              <Flex gap="5px">
                <Text fontWeight="bold">Area: </Text>
                <Text>{triangle.data.area}</Text>
              </Flex>
              <Flex gap="5px">
                <Text fontWeight="bold">Circumradius: </Text>
                <Text>{triangle.data.circumradius}</Text>
              </Flex>
              <Flex gap="5px">
                <Text fontWeight="bold">Type by sides: </Text>
                <Text>{triangle.data.typeBySides}</Text>
              </Flex>
              <Flex gap="5px">
                <Text fontWeight="bold">Type by angles: </Text>
                <Text>{triangle.data.typeByAngles}</Text>
              </Flex>
            </Box>

            <Flex gap={4} justifyContent="flex-end">
              <Button colorScheme="blue">Edit</Button>
              <Button colorScheme="red" onClick={deleteHandler}>
                Delete
              </Button>
            </Flex>
          </Stack>
          <Flex border="1px solid" borderColor="gray.200" flexGrow={1}>
            <Center>
              <TriangleCanvas triangle={triangle.data} width={600} height={470} />
            </Center>
          </Flex>
        </Flex>
      </AccordionPanel>

      {qDeleteTriangle.isLoading && <LoadingOverlay />}

      <InfoModal
        title="Delete successfull"
        content={<Text>Triangle was successfully deleted!</Text>}
        isOpen={isOpen}
        onClose={closeModalHandler}
      />
    </>
  );
}

export default TrianglesListItemExpand;
