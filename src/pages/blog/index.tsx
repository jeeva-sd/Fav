import { memo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { BsFilePostFill } from 'react-icons/bs';

import Headsection from '~/components/seo/Headsection';
import { blogRoutes } from '~/components/blog/blogRoutes';
import { Posts } from '~/components/blog/types';
import { SeoParams } from '~/components/seo/types';
import { getWeekDifference } from '~/helpers';
import beam from '~/assets/images/breams/beams.jpg';
import grid from '~/assets/images/breams/grid-01.png';

const DynamicImage = dynamic(() => import('next/image'), { ssr: true });
const RightArrow = dynamic(() => import('~/widgets/RightArrow'));

const BlogIndex = () => {
  const { pathname, push } = useRouter();

  const seoParams: SeoParams = {
    title: 'How to Grow Your Instagram Following with Fav Blog',
    description: 'Fav Blog is a website dedicated to helping you grow your Instagram following. We offer a variety of resources, including articles, tutorials, and infographics, that can help you improve your Instagram strategy. Whether you\'re a beginner or a seasoned pro, we have something for you.',
    keywords: 'Instagram blog, engaging posts, tips and tricks, marketing, branding, sales, increase followers, increase engagement, Instagram success, latest posts, lifestyle, fashion, travel, expert authors, Instagram goals',
    pageUrl: pathname,
    canonical: false
  };

  return (
    <>
      <Headsection seoParams={seoParams} />

      <div className='flex flex-wrap justify-center min-h-screen'>
        <div className='flex items-center justify-around w-full h-auto py-40'>
          <Image src={beam} alt='' className='fixed z-[-10] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] top-40 left-2/4 -translate-x-2/3 -translate-y-1/2 max-w-none' draggable={false} priority={true} />
          <Image src={grid} alt='' className='absolute [mask-image:linear-gradient(90deg,white,rgba(255,255,255,0))] top-0 left-0 -translate-y-28 h-full opacity-5' priority={true} draggable={false} width={1920} height={1080} />
          <div className='lg:w-6/12 w-full flex justify-center'>
            <div className=' text-indigo-600 absolute lg:top-20 lg:flex hidden pr-96'>
            </div>
            <div className='antialiased text-4xl font-extrabold sm:text-6xl -skew-y-6 select-none'>
              <div className='lg:w-fit md:w-full w-full bg-white hover:bg-slate-50 p-5 rounded-2xl shadow-lg'>
                <span className='text-indigo-600 mx-5'>Fav - </span>
                <span className='tracking-widest inline-flex align-middle'> BLOG</span>
              </div>
            </div>
          </div>
        </div>

        <span className='dark w-full'>
          <section className='bg-white dark:bg-gray-900 w-full z-10'>
            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
              <div className='mr-auto place-self-center lg:col-span-7'>
                <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white uppercase'>Step into the spotlight</h1>
                <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>Welcome to the vibrant world where your ideas come alive. Join us,
                  where we decode the secrets to engaging posts, tips and tricks and irresistible story ideass. And make your Instagram dreams a reality!</p>
              </div>
              <div className='hidden lg:mt-0 lg:col-span-5 lg:flex text-center justify-center items-center'>
                <TiSocialInstagramCircular color='white' className='animate-spin' fontSize={300} style={{ animation: 'spin 25s linear infinite' }} />
              </div>
            </div>
          </section>
        </span>

        <div className='flex flex-wrap justify-center w-full z-10 bg-gradient-to-r from-slate-50 to-slate-100 pb-20'>

          <section className='bg-gradient-to-r from-slate-50 to-slate-100 dark:bg-gray-900' id='postDiv'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
              <div className='mx-auto max-w-screen-lg text-center lg:mb-16 mb-8'>
                <h2 className='mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>POSTS</h2>
                <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
                  we&apos;re passionate about helping you achieve your Instagram goals. Our articles are crafted to provide actionable advice and step-by-step guides, empowering you to increase your followers, engagement, and overall success on this influential platform.
                </p>
              </div>

              <div className='grid gap-8 lg:grid-cols-2'>
                {blogRoutes.map((page: Posts, index: number) => {
                  return (
                    <article key={index} className='p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                      <div className='flex justify-between items-center mb-5 text-gray-500'>
                        <span className='bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
                          <BsFilePostFill className='mr-1' />
                          {page.category}
                        </span>
                        <span className='text-sm'>{getWeekDifference(page.createdAt)} weeks ago</span>
                      </div>
                      <h2 onClick={() => push(page.path)} className='mb-2 cursor-pointer text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{page.title}</h2>
                      <p className='mb-5 font-light text-gray-500 dark:text-gray-400 line-clamp-3'>{page.description}</p>
                      <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-4'>
                          <DynamicImage width={100} height={100} className='w-7 h-7 rounded-full' src={(page.authorImage as any)} alt='Fav Insta author' />
                          <span className='font-medium dark:text-white'>
                            {page.author}
                          </span>
                        </div>
                        <span onClick={() => push(page.path)} className='cursor-pointer inline-flex text-indigo-600 items-center font-medium text-primary-600 dark:text-primary-500 hover:underline'>
                          Read more
                          <RightArrow />
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default memo(BlogIndex);