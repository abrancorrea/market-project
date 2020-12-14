import { Flex } from '@chakra-ui/react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React from 'react';
import Header from '../../components/common/Header';
import SideBar from '../../components/common/SideBar';
import Banner from './Banner';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Flex bg="#f9f9f9" p={5}>
        <OverlayScrollbarsComponent
          style={{ maxHeight: 300, height: 'fit-content' }}
          options={{ scrollbars: { visibility: 'h' } }}
        >
          <SideBar />
        </OverlayScrollbarsComponent>
      </Flex>
    </>
  );
};

export default Home;
