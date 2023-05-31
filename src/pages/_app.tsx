import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '~/state/store';
import '~/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });
const Header = dynamic(() => import('~/components/layout/Header'), { ssr: true });
const Footer = dynamic(() => import('~/components/layout/Footer'), { ssr: false });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <div className={`${inter.className} antialiased`}>
        <Header />
        <React.Suspense fallback={<div className='flex w-full justify-center h-screen items-center'>Loading...</div>}>
          <Component {...pageProps} />
        </React.Suspense>
        <Footer />
      </div>
    </Provider>
  );
};

export default memo(App);