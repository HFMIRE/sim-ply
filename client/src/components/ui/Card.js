import React from 'react';

import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';

import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Card({ iconType, name }) {
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack spacing={0} align={'center'} mb={5}>
          {iconType === 'group' ? (
            <HiOutlineUserGroup size={30} />
          ) : (
            <AiOutlineUser size={30} />
          )}
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontSize={'xl'} color={'gray.900'}>
            £1, 0000
          </Text>
        </Stack>

        <Button
          w={'full'}
          mt={8}
          bg={useColorModeValue('purple.900', 'gray.900')}
          color={'white'}
          rounded={'md'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
        >
          See More
        </Button>
      </Box>
    </Center>
  );
}
