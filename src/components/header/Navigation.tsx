import { Flex, Link } from '@chakra-ui/react';

import routes from 'router/routes';

export default function Navigation() {
  return (
    <Flex>
      <Link href={routes.home}>Dashboard</Link>
    </Flex>
  );
}
