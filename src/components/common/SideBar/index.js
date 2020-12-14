import { Box, Button, Flex, Grid, HStack, Text, useRadio, useRadioGroup } from '@chakra-ui/react';
import React from 'react';
import { Search2Icon } from '@chakra-ui/icons';

const SideBar = () => {
  const handleTiles = (e) => {
    console.log(e);
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'category',
    defaultValue: 1,
    onChange: handleTiles
  });

  const group = getRootProps();

  return (
    <>
      <Flex flexWrap="wrap" w="320px" justifyContent="space-around" {...group}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioTiles key={value} {...radio}>
              {value}
            </RadioTiles>
          );
        })}
      </Flex>
    </>
  );
};

const RadioTiles = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" cursor="pointer">
      <input {...input} />
      <Box
        {...checkbox}
        maxW="150px"
        _focus={{
          boxShadow: '0px 0px 0px 2px ',
          outlineColor: 'black'
        }}
        marginTop="10px"
        minW="2px"
        borderWidth="1px"
        overflow="hidden"
        p={10}
        bgColor="rgb(255, 255, 255)"
        borderRadius="6px"
        borderColor="rgb(255, 255, 255);"
        marginBottom="10px"
      >
        <Flex
          h="80px"
          alignItems="center"
          justifyContent="center"
          align="center"
          justify="center"
          flexDirection="column"
        >
          <Search2Icon color="black" />
          <Text marginTop={4} fontWeight="500">
            Fruits & Vegetables
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default SideBar;
