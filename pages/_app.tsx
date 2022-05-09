import "../styles/index.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import LanguageProvider, { LanguageContext } from "contexts/language";
import { DefaultSeo } from "next-seo";

import theme from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <>
          <DefaultSeo
            additionalLinkTags={[
              {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
              },
              {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
                crossOrigin: "crossorigin",
              },
              {
                rel: "preload",
                as: "style",
                href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Poppins:wght@700&display=swap",
              },
              {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Poppins:wght@700&display=swap",
              },
            ]}
          />
          <Component {...pageProps} />
        </>
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default MyApp;
