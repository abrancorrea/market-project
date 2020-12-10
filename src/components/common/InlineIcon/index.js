import { Icon } from '@chakra-ui/react';
import * as Unicons from '@iconscout/react-unicons'; // {UilCapsule: {}, Ui }
import React from 'react';

const InlineIcon = ({ iconType, color }) => (
  <Icon
    as={Unicons[iconType] || Unicons.UilCapsule}
    boxSize="20px"
    color={color || 'black'}
    mr="1"
  />
);

export default InlineIcon;
