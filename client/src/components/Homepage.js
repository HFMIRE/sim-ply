import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import BalanceCard from './ui/BalanceCard';
import { RecentsCard } from './RecentsCard';
import { MdAdd } from 'react-icons/md';
const Homepage = () => {
  return (
    <Box>
      <BalanceCard />
      <Box maxW="md" borderWidth="1px" borderRadius="sm" mt={3}>
        <HStack>
          <MdAdd />
          <Box>Add Pots</Box>
        </HStack>
      </Box>

      <Box mt={3}>Your Pots</Box>
      <RecentsCard />
    </Box>
  );
};

export default Homepage;
