import { Flex, Link } from '@chakra-ui/react';

import routes from 'router/routes';

export default function Navigation() {
  return (
    <Flex gap="20px">
      <Link href={routes.home}>Dashboard</Link>
      <Link href={routes.generateTriangle}>Generate</Link>
    </Flex>
  );
}
