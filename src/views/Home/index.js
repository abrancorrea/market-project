import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  Text
} from '@chakra-ui/react';
import React from 'react';
import Header from '../../components/common/Header';
import banner from '../../assets/img/grocery-banner-main.png';
import { Search2Icon } from '@chakra-ui/icons';

const Home = () => {
  return (
    <>
      <Header />
      <Box
        as={Flex}
        w="100%"
        h="100vh"
        bgImage={`url(${banner})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        align="center"
        justify="center"
        flexDirection="column"
      >
        <Heading size="2xl">Groceries Delivered in 90 Minutes</Heading>
        <Text mt="5" color="gray.500" fontSize="lg">
          Get your healthy foods & snacks delivered at your doorsteps all day everyday
        </Text>

        <InputGroup
          mt="10"
          w="45%"
          h="50px"
          bg="white"
          variant="ghost"
          borderLeftRadius={10}
          boxShadow="2xl"
        >
          <InputLeftAddon
            bg="gray.50"
            fontWeight="500"
            color="brand.700"
            children="Grocery"
            borderTopRightRadius="1"
            borderBottomRightRadius="1"
            m="1"
            p={3}
          />
          <Input
            type="phone"
            borderLeftRadius="0"
            placeholder="Search your products from here"
            m="1"
          />
          <InputRightAddon
            as="button"
            bg="brand.700"
            color="whiteAlpha.900"
            h="100%"
            pr="30px"
            pl="30px"
          >
            <Search2Icon color="black.300" mr="3" /> Search
          </InputRightAddon>
        </InputGroup>
      </Box>
    </>
  );
};

export default Home;
