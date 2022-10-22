import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Homepage from './components/Homepage';
import Layout from './components/Layout';
import './style.css';
function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Layout> */}
      <Homepage />
      {/* </Layout> */}
    </ChakraProvider>
  );
}

export default App;
