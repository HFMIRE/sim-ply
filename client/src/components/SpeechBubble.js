import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

export default function SpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>User 1</TestimonialHeading>
              <TestimonialText>+£20</TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>User 2</TestimonialHeading>
              <TestimonialText>+£20</TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>User 1</TestimonialHeading>
              <TestimonialText>-£20</TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
