import { memo } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Inter } from 'next/font/google';
import { store } from '~/state/store';
import Header from '../components/layout/Header';
import '~/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  return <Provider store={store}>
    <div className={inter.className}>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  </Provider>;
};

export default memo(App);