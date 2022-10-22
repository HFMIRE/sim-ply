import React from 'react';
import { MdCallReceived, MdCallMade } from 'react-icons/md';
import { Box, HStack, Circle } from '@chakra-ui/react';
const IconsOption = () => {
  return (
    <Box>
      <HStack>
        <Circle size="40px" bg="tomato" color="white">
          <MdCallReceived size={28} color="white" />
        </Circle>
        <br />
        <Circle size="40px" bg="aliceblue" color="white">
          <MdCallMade size={28} color="purple" />
        </Circle>
      </HStack>
    </Box>
  );
};

export default IconsOption;
