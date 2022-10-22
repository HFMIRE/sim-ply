import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Card from './ui/Card';
export const RecentsCard = () => {
  return (
    <Box>
      <Box ml={10}>
        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
          Your Pots
        </Heading>
      </Box>

      <Card iconType="single" name="Naruto" />
      <Card iconType="group" name="Cowboy Bebop" />
    </Box>
  );
};
