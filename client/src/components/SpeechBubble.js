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

const TestimonialContentLeft = ({ children }) => {
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
        left: '-20px',
        bottom:'10%',
        transform: 'translateX(-50%)',
        transform:'rotate(90deg)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialContentRight = ({ children }) => {
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
          borderTopColor: useColorModeValue('white', 'gray.900'),
          pos: 'absolute',
          right: '-20px',
          bottom:'10%',
          transform: 'translateX(-50%)',
          transform:'rotate(270deg)',
          
        }}>
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
    <Heading
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Heading>
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
            <TestimonialContentLeft>
              <TestimonialHeading>Mark</TestimonialHeading>
              <TestimonialText>
                +£20
              </TestimonialText>
            </TestimonialContentLeft>
          
          </Testimonial>
          <Testimonial>
            <TestimonialContentRight>
              <TestimonialHeading>Mary</TestimonialHeading>
              <TestimonialText>
             +£20
              </TestimonialText>
            </TestimonialContentRight>
         
          </Testimonial>
          <Testimonial>
            <TestimonialContentLeft>
              <TestimonialHeading>Mark</TestimonialHeading>
              <TestimonialText>
               -£20
              </TestimonialText>
            </TestimonialContentLeft>
        
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
