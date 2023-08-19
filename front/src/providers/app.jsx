import React from 'react';
import { RecoilRoot } from 'recoil';
import { Center, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/templates/header';


const AppProvider = ({ children }) => {
  return (
    <>
      <RecoilRoot>
        <ChakraProvider>
          <Router>
            <Header />
            <Center h={'500px'}>{children}</Center>
          </Router>
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
};

export default AppProvider;