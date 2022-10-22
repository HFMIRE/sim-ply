import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
export const Card = ({ iconType, name }) => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    title: 'Cowboy Bebop',
    formattedPrice: '$1,900.00',
  };
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
      justifyContent={'center'}
    >
      <Box p={6}>
        <HStack>
          {iconType === 'group' ? (
            <HiOutlineUserGroup size={30} />
          ) : (
            <AiOutlineUser size={30} />
          )}

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {name}
          </Box>
        </HStack>

        <Box>{property.formattedPrice}</Box>
      </Box>
    </Box>
  );
};
