import { memo } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import Headsection from '~/components/seo/Headsection';
import { SeoParams } from '~/components/seo/types';
import ExploreFav from '~/components/home/ExploreFav';

const TopBlue = dynamic(() => import('~/components/home/TopBlue'), { ssr: true });
const BottomBlue = dynamic(() => import('~/components/home/BottomBlue'), { ssr: true });
const NewsLetter = dynamic(() => import('~/components/home/NewsLetter'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const { pathname, push } = useRouter();

  const seoParams: SeoParams = {
    title: 'Get more Instagram followers with our hashtag generator and other tools',
    description: 'Explore the latest updates on Instagram and get its related contents like Instagram tips, Instagram marketing, instagram influencer, influencer marketing, hashtag generators.',
    keywords: 'Instagram tips, Instagram marketing, instagram influencer, influencer marketing, hashtag generators, Instagram Stories, Instagram Stories.',
    pageUrl: pathname,
    canonical: false
  };

  return (
    <>
      <Headsection seoParams={seoParams} />

      <main className={`${inter.className} `}>
        <div className='flex items-center isolate px-6 pt-14 lg:px-8 min-h-[100vh] max-h-[100vh]'>
          <TopBlue />
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                <span className='text-indigo-600'>Fav</span>Insta.com
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Explore the latest updates and ideas to stay creative on your Instagram journey. Get to know about the latest trends and features that Instagram has rolled out and increase your followers and likes on Instagram
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6 select-none'>
                <span onClick={() => push('/blog')} className='text-sm font-semibold leading-6 border rounded-xl py-1 px-3 hover:border-indigo-600 hover:text-indigo-600 transition-all cursor-pointer text-gray-900'>
                  Discover More <span aria-hidden='true'>→</span>
                </span>
              </div>
            </div>
          </div>
          <BottomBlue />
        </div>

        <div className='rounded-t-[150px] lg:px-20 md:px-20 px-0'><ExploreFav /></div>
        <div><NewsLetter /></div>
      </main>
    </>
  );
};

export default memo(Home);