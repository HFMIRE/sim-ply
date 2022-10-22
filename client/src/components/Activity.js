import React from 'react';
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  Stack,
  Button,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';


import SpeechBubbles from './SpeechBubble';

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Activity() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Current Savings Goal
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Goal'} stat={'£3,000'} />
        <StatsCard title={'Balance'} stat={'£1,000'} />
      </SimpleGrid>
      
      <Box>
      <SpeechBubbles/>
      </Box>
      <Stack spacing={6} direction={'row'}  ml={5} p={5}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Add +
          </Button>
          <Button rounded={'full'} px={6}>
            Withdraw -
          </Button>
        </Stack>
<Box>
  
</Box>

  
    </Box>
  );

  
}
