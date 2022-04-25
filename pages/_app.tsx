import "../styles/index.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import LanguageProvider, { LanguageContext } from "contexts/language";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default MyApp;
