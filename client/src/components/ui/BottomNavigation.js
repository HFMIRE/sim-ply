import { Box, Stack } from '@chakra-ui/react';
import { ImHome, ImSearch } from 'react-icons/im';
import { FaRegUser } from 'react-icons/fa';

export default function BottomNavigation() {
  return (
    <Box maxW="md" overflow="hidden" bgColor={'red'}>
      {' '}
      <Stack direction={'row'} justifyContent={'center'} spacing={6}>
        <ImHome />
        <ImSearch />
        <FaRegUser />
      </Stack>
    </Box>
  );
}
