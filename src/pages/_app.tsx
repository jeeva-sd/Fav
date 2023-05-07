import { memo } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Inter } from 'next/font/google';
import { store } from '~/state/store';
import Header from '../components/layout/Header';
import Footer from '~/components/layout/Footer';
import '~/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  return <Provider store={store}>
    <div className={inter.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </Provider>;
};

export default memo(App);