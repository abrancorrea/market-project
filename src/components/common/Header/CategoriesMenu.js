import { TriangleDownIcon } from '@chakra-ui/icons';
import { Button, Text, Menu, MenuButton, MenuItem, MenuList, Flex } from '@chakra-ui/react';
import { UilApple, UilCapsule, UilBookOpen } from '@iconscout/react-unicons';
import React from 'react';
import InlineIcon from '../InlineIcon';

const categories = [
  { title: 'Bakery', icon: null },
  { title: 'Clothing', icon: null },
  { title: 'Book', icon: 'UilBookOpen' },
  { title: 'Medicine', icon: 'UilCapsule' },
  { title: 'Furniture', icon: null }
];

const CategoriesMenu = () => {
  return (
    <Menu w="100%">
      <MenuButton
        as={Button}
        rightIcon={<TriangleDownIcon color="brand.700" height="12px" />}
        variant="outline"
        size="md"
      >
        <Flex align="center">
          <InlineIcon iconType={UilApple} color="brand.700" />
          <Text color="brand.700">Grocery</Text>
        </Flex>
      </MenuButton>
      <MenuList>
        {categories.map((cat) => (
          <MenuItem>
            <InlineIcon iconType={cat.icon} />
            {cat.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategoriesMenu;
