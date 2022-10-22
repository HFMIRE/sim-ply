import React from 'react';
import { Box } from '@chakra-ui/react';
import { Card } from './ui/Card';
export const RecentsCard = () => {
  return (
    <Box>
      <Card iconType="single" name="Naruto" />
      <Card iconType="group" name="Cowboy Bebop" />
    </Box>
  );
};
