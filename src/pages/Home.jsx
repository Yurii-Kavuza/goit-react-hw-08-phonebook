import { Box, Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex pt="16px" justify="center" minH="calc(100vh - 50px)">
      <Box as="h1" fontWeight="500" fontSize="48" textAlign="center">
        Welcome to phonebook
      </Box>
    </Flex>
  );
}
