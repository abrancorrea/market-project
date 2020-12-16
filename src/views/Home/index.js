import { Flex, Box } from '@chakra-ui/react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React from 'react';
import Header from '../../components/common/Header';
import SideBar from '../../components/common/SideBar';
import Slider from '../../components/common/Slider';
import Banner from './Banner';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Flex bg="#f9f9f9" p={5} justifyContent="space-around">
        <OverlayScrollbarsComponent
          style={{ maxHeight: 300, height: 'fit-content' }}
          options={{ scrollbars: { visibility: 'h' } }}
        >
          <SideBar />
        </OverlayScrollbarsComponent>
        <Box as={Flex} w="75%" pl="15px" pr="15px">
          <Slider />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
