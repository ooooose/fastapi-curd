import React from 'react';

import { Link } from 'react-router-dom';
import { Heading, Box } from '@chakra-ui/react';

const Logo = ({ ...props }) => {
  return (
    <>
      <Box p={2} float="left">
        <Link className="App-link" to="/">
          <Heading {...props}>タスク管理アプリ</Heading>
        </Link>
      </Box>
    </>
  );
};

export default Logo;