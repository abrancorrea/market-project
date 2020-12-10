import React from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { Center, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const SearchSection = () => (
  <Flex h="90" w="33%" alignItems="center" flexGrow={1}>
    <Center w="100%">
      <InputGroup w="100%" maxW={900} variant="filled" colorScheme="brand">
        <InputLeftElement pointerEvents="none" children={<Search2Icon color="black.300" />} />
        <Input
          type="text"
          _focus={{ boxShadow: 'inherit' }}
          placeholder="Search your products from here"
        />
      </InputGroup>
    </Center>
  </Flex>
);

export default SearchSection;
