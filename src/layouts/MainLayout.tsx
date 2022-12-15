import { Box, Container, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <VStack minH="100vh" margin={0}>
      <Container flex={1} maxW="container.xl">
        {children}
      </Container>

      <Box as="footer" flex={0}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </Box>
    </VStack>
  );
}
