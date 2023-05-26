import type { AppProps } from 'next/app'
import Modal from "react-modal";
import { GlobalStyles } from '@/styles/Global';
import { defaultTheme } from '@/styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { AuthContextProvider } from '@/context/authContext';

Modal.setAppElement("#__next");

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType | any;
  };
};

export default function App({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </AuthContextProvider>
  )
}
