import React from 'react';
import { MdCallReceived, MdCallMade } from 'react-icons/md';
import { Box, HStack, Circle, Text, VStack } from '@chakra-ui/react';
const IconsOption = () => {
  return (
    <Box pr={10}>
      <HStack>
        <Box p={7}>
          <VStack>
            <Circle size="40px" bg="tomato" color="white">
              <MdCallReceived size={28} color="white" />
            </Circle>
            <Text> Send </Text>
          </VStack>
        </Box>
        <Box>
          <VStack>
            <Circle size="40px" bg="aliceblue" color="white">
              <MdCallMade size={28} color="navy" />
            </Circle>
            <Text> Withdraw </Text>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default IconsOption;
