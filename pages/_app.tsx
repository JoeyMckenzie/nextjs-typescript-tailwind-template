import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import MainLayout from '../layouts/MainLayout';
import { ThemeProvider } from 'next-themes';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </ThemeProvider>
);

export default CustomApp;
