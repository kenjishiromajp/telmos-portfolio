import {
  Avatar,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  WrapItem,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { FormattedMessage } from 'react-intl';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />

      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
        alignItems="center"
      >
        <WrapItem>
          <Avatar
            margin="auto"
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />{' '}
        </WrapItem>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
        >
          <Text as="span" marginRight="2">
            Telmo
          </Text>
          <Text as="span" color="green.400">
            Lazkano
          </Text>
        </Heading>
        <Text fontSize="2xl" color="gray.500" width="2xl">
          <FormattedMessage id="profileDescription" />
        </Text>
        <Stack
          direction="column"
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <Button
            colorScheme="green"
            bg="green.400"
            rounded="full"
            px={6}
            _hover={{
              bg: 'green.500',
            }}
          >
            Contatar me
          </Button>
        </Stack>
      </Stack>
    </MainLayout>
  );
}
