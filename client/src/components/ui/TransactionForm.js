import {
  HStack,
  FormControl,
  Select,
  Box,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  FormLabel,
  NumberInput,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import React from 'react';

const TransactionForm = () => {
  return (
    <Box maxW={'md'} overflow={'hidden'} justifyContent={'center'}>
      <Box
        p={4}
        maxW={'xs'}
        justifyContent={'center'}
        borderWidth="1px"
        borderRadius="lg"
        bgColor={'purple.600'}
      >
        <FormControl color={'orange.100'}>
          <FormLabel>Country</FormLabel>
          <HStack>
            <Select placeholder="Select country code" size="xs">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
            <FormLabel>Amount</FormLabel>
            <NumberInput max={50} min={10} size="xs">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default TransactionForm;
