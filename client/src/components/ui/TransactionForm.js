import {
  FormControl,
  Box,
  Stack,
  FormLabel,
  InputGroup,
  FormHelperText,
  Input,
  InputLeftAddon,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const TransactionForm = () => {
  return (
    <Box>
      <Box p={4} gap={20}>
        <FormControl color={'purple.700'}>
          <InputGroup>
            <InputLeftAddon children="USD" />
            <Input type="number" placeholder="Amount" />
          </InputGroup>

          <InputGroup mt={5}>
            <InputLeftAddon children="+234" />
            <Input type="tel" placeholder="phone number" />
          </InputGroup>

          <FormLabel mt={5}>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </Box>
      <Stack spacing={6} direction={'row'} justifyContent={'center'} p={5}>
        <Button
          rounded={'full'}
          px={6}
          colorScheme={'purple'}
          bg={'purple.400'}
          _hover={{ bg: 'purple.500' }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default TransactionForm;
