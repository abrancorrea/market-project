import React from 'react';
import { Flex } from '@chakra-ui/react';
import LeftSection from './LeftSection';
import SearchSection from './SearchSection';
import RightSection from './RightSection';

const Header = () => {
  return (
    <header>
      <Flex boxShadow="lg" justifyContent="space-between" p={[2, 2]} bg="blue">
        <LeftSection />
        <SearchSection />
        <RightSection />
      </Flex>
    </header>
  );
};

export default Header;
