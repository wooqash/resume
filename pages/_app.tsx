import "../styles/index.scss";
import type { AppProps } from "next/app";
import ThemeProvider from "context/theme.context";
import LangContext from "context/lang.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LangContext>
        <Component {...pageProps} />
      </LangContext>
    </ThemeProvider>
  );
}

export default MyApp;
