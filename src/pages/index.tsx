import {
  Avatar,
  Button,
  Card,
  CardBody,
  Code,
  Heading,
  SimpleGrid,
  Text,
  WrapItem,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />

      <WrapItem>
        <Avatar
          margin="auto"
          size="2xl"
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
        />{' '}
      </WrapItem>
      <Heading as="h1">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Heading>

      <Text>
        Get started by editing
        <Code>pages/index.tsx</Code>
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="40px" spacingY="20px">
        <Card as="a" href="https://nextjs.org/docs">
          <CardBody>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </CardBody>
        </Card>

        <Card as="a" href="https://nextjs.org/learn">
          <CardBody>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </CardBody>
        </Card>

        <Card
          as="a"
          href="https://github.com/vercel/next.js/tree/canary/examples"
        >
          <CardBody>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </CardBody>
        </Card>

        <Card
          as="a"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardBody>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </CardBody>
        </Card>
      </SimpleGrid>
    </MainLayout>
  );
}
