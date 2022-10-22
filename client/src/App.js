import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Homepage from './components/Homepage';
import Layout from './components/Layout';
import Activity from './components/Activity';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Layout> */}
      {/* <Homepage /> */}
      <Activity />
      {/* </Layout> */}
    </ChakraProvider>
  );
}

export default App;
