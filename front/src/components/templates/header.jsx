import React from 'react';

import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from '../atoms/Logo';

const Header = ({ onOpen, ...rest }) => {
  return (
    <Box
      mt={2}
      mx={2}
      px={6}
      height="20"
      width="100%"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      {...rest}
    >
      <Box position={'fixed'} display={'flex'}>
        <Logo />
      </Box>
    </Box>
  );
};

export default Header;