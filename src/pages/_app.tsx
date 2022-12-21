import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import theme from '../constants/theme';
import '../styles/index.css';
import { IntlContextProvider } from '../hooks/useIntlProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <IntlContextProvider>
        <NextSeo
          title="Telmo's portfolio"
          description="A short description goes here."
        />
        <Component {...pageProps} />
      </IntlContextProvider>
    </ChakraProvider>
  );
}
