import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Homepage from './components/Homepage';

import Activity from './components/Activity';

import TransactionPage from './components/TransactionPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Homepage /> */}
      <Activity />
      {/* <TransactionPage /> */}
    </ChakraProvider>
  );
}

export default App;
