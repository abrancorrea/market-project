import { Center, Flex } from '@chakra-ui/react';
import React from 'react';
import Logo from '../Logo';
import CategoriesMenu from './CategoriesMenu';

const LeftSection = () => (
  <Flex h="90" w="20%" maxW={400} align="center" justifyContent="center">
    <Flex h="10" w="40%" maxW={300}>
      <Center w="100%">
        <Logo />
      </Center>
    </Flex>
    <Flex h="10" w="60%" maxW={400}>
      <Center w="100%">
        <CategoriesMenu />
      </Center>
    </Flex>
  </Flex>
);
export default LeftSection;
