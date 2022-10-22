import React from 'react';
import {
  Box,
  Stack,
  Flex,
  Text,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import TransactionForm from './ui/TransactionForm';
const TransactionPage = () => {
  return (
    <Box maxW="md" overflow="hidden">
      <Stack minH={'md'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                Freelance
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Design Projects
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <TransactionForm />
    </Box>
  );
};

export default TransactionPage;
