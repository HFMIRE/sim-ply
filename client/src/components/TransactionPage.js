import React from 'react';
import { Box } from '@chakra-ui/react';
import TransactionForm from './ui/TransactionForm';
const TransactionPage = () => {
  return (
    <Box maxW="md" overflow="hidden">
      <TransactionForm />
    </Box>
  );
};

export default TransactionPage;
