import React from 'react';
import { findFlagUrlByCountryName } from 'country-flags-svg';
import {
  Flex,
  Center,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Image
} from '@chakra-ui/react';
import { Search2Icon, TriangleDownIcon, QuestionIcon } from '@chakra-ui/icons';
import Logo from '../Logo';

const Header = () => {
  return (
    <header>
      <Flex boxShadow="lg" justifyContent="space-between" p={[2, 2]} bg="blue">
        <LeftElements />
        <SearchSection />
        <RightSection />
      </Flex>
    </header>
  );
};
const LeftElements = () => (
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

const CategoriesMenu = () => (
  <Menu w="100%">
    <MenuButton
      as={Button}
      rightIcon={<TriangleDownIcon color="brand.700" height="12px" />}
      variant="outline"
      size="md"
    >
      <Text color="brand.700">Grocery</Text>
    </MenuButton>
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
  </Menu>
);

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

const RightSection = () => (
  <Flex h="90" w="33%" maxW={450} align="center">
    <Flex h="10" w="33%" maxW={450}>
      <Button colorScheme="black" _hover={{ color: 'brand.700' }} variant="ghost" m={[0, 'auto']}>
        Offer
      </Button>
    </Flex>
    <Flex h="10" w="33%" maxW={450}>
      <Button
        leftIcon={<QuestionIcon />}
        _hover={{ color: 'brand.700' }}
        colorScheme="black"
        variant="ghost"
      >
        Need Help
      </Button>
    </Flex>
    <Flex h="10" w="33%" maxW={450} align="center">
      <Menu w="100%">
        <MenuButton size="md" as={Button} d="flex" variant="outline" m={[0, 'auto']}>
          <Flex align="center">
            <Image
              boxSize="20px"
              borderRadius="full"
              src={'//purecatamphetamine.github.io/country-flag-icons/1x1/US.svg'}
              alt=""
              m="5px"
            />
            <Text fontSize="sm" color="brand.700">
              English
            </Text>
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Image
              boxSize="20px"
              borderRadius="full"
              src={'https://purecatamphetamine.github.io/country-flag-icons/1x1/ES.svg'}
              alt=""
              m="5px"
            />
            Spanish
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
    <Flex h="15" w="20%" p={2} boxSizing="border-box" maxW={450}>
      <Button colorScheme="brand" bg="brand.700">
        Join
      </Button>
    </Flex>
  </Flex>
);

export default Header;
