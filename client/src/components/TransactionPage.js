import React from 'react';
import { Box, Stack, Flex, Heading, Text, Center } from '@chakra-ui/react';
import TransactionForm from './ui/TransactionForm';
const TransactionPage = () => {
  return (
    <Box maxW="md" overflow="hidden">
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'purple.400'} as={'span'}>
                Add Money
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Adding money to a community saving pot
            </Text>
            <Center>
              <Box
                maxW={'lg'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
              >
                <TransactionForm />
              </Box>
            </Center>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default TransactionPage;
