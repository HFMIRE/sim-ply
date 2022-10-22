import React from 'react';
import { Box } from '@chakra-ui/react';
import IconsOption from './IconsOption';
const BalanceCard = () => {
  return (
    <Box maxW="md" overflow="hidden" backgroundColor={'purple.900'}>
      <Box p="6">
        <Box
          color="orange.100"
          fontWeight="medium"
          letterSpacing="wide"
          fontSize="lg"
          textTransform="uppercase"
          ml="2"
        >
          Your Avaliable Balance
        </Box>
        <Box
          p={2}
          color="red.200"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="3xl"
          textTransform="uppercase"
          ml="2"
        >
          £89.00
        </Box>
        <IconsOption />
      </Box>
    </Box>
  );
};

export default BalanceCard;
