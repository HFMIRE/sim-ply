import { Box } from '@chakra-ui/react';
import React from 'react';
import BottomNavigation from './ui/BottomNavigation';

const Layout = ({ children }) => {
  return (
    <Box>
      {/* <NavBar /> */}
      {children}
      <box display={'flex'} minHeight="100vh" flexDir={'column'}>
        <BottomNavigation />
      </box>
    </Box>
  );
};

export default Layout;
