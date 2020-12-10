import React from 'react';
import { QuestionIcon } from '@chakra-ui/icons';
import { Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';

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

export default RightSection;
