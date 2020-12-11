import React from 'react';
import { Flex } from '@chakra-ui/react';
import LeftSection from './LeftSection';
import SearchSection from './SearchSection';
import RightSection from './RightSection';

const Header = () => {
  return (
    <header>
      <Flex justifyContent="space-between" p={[3, 4]} bg="transparent" position="absolute" w="100%">
        <LeftSection />
        <SearchSection />
        <RightSection />
      </Flex>
    </header>
  );
};

export default Header;
