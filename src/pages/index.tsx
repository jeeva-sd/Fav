import { memo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import InstaView from '~/components/home/InstaView';
import TopBlue from '~/components/home/TopBlue';
import BottomBlue from '~/components/home/BottomBlue';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>FavInsta</title>
        <meta name='description' content='JusDownload' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <div className="flex items-center isolate px-6 pt-14 lg:px-8 min-h-[100vh] max-h-[100vh] bg-slate-100">
          <TopBlue />
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                FavInsta.com
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover the latest trends, and updates to skyrocket your Instagram success.  Explore the latest features and updates Instagram has rolled out, ensuring you&apos;re always one step ahead in leveraging full potential.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {/* <span
                  onClick={() => router.push('/blog')}
                  className="cursor-pointer rounded-md bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-sm"
                >
                  Get started
                </span> */}
                <span onClick={() => router.push('/blog')} className="text-sm font-semibold leading-6 border rounded-xl py-1 px-3 hover:border-indigo-600 hover:text-indigo-600 transition-all cursor-pointer text-gray-900">
                Discover More <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </div>
          <BottomBlue />
        </div>
        <InstaView />
      </main>
    </>
  );
};

export default memo(Home);