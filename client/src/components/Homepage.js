import React from 'react';
import { Box, HStack, Button } from '@chakra-ui/react';

import { RecentsCard } from './RecentsCard';
import { Stack, Container, Flex, Text, Heading } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import IconsOption from './ui/IconsOption';

const Homepage = () => {
  return (
    <Box>
      <Box bg={'gray.800'} position={'relative'}>
        <Flex
          flex={1}
          zIndex={0}
          display={{ base: 'none', lg: 'flex' }}
          backgroundSize={'cover'}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          position={'absolute'}
          width={'50%'}
          insetY={0}
          right={0}
        >
          <Flex
            bgGradient={'linear(to-r, gray.800 10%, transparent)'}
            w={'full'}
            h={'full'}
          />
        </Flex>
        <Container maxW={'7xl'} zIndex={10} position={'relative'}>
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Stack
              flex={1}
              color={'gray.400'}
              justify={{ lg: 'center' }}
              py={{ base: 4, md: 20, xl: 60 }}
            >
              <Box mb={{ base: 3, md: 5 }}>
                <Heading
                  color={'white'}
                  mb={5}
                  fontSize={{ base: '3xl', md: '5xl' }}
                >
                  Your Avaliable Balance
                </Heading>
                <Text
                  color={'orange.400'}
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="3xl"
                  textTransform="uppercase"
                  ml="2"
                >
                  £89.00
                </Text>
              </Box>
              <Box></Box>
              <IconsOption />
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Container>
      </Box>
      <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}
        p={10}
      >
        <HStack>
          <Button
            colorScheme={'purple'}
            bg={'purple.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'purple.500',
            }}
            leftIcon={<MdAdd />}
          >
            Add a pot
          </Button>
        </HStack>
      </Stack>
      <Box ml={10}></Box>

      <RecentsCard />
    </Box>
  );
};

export default Homepage;
