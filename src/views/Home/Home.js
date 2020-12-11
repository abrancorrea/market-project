import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/common/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Box as={Flex} w="100%" h="100vh" bgImage="url('../')">
        <p>te</p>
      </Box>
    </>
  );
};

export default Home;
