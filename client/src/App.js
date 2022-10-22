import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Homepage from './components/Homepage';
import Layout from './components/Layout';
import Activity from './components/Activity';
import TransactionForm from './components/ui/TransactionForm';
import TransactionPage from './components/TransactionPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Homepage />
      <Activity />
      <TransactionPage />
    </ChakraProvider>
  );
}

export default App;
