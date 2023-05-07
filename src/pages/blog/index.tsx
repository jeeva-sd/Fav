import Image from 'next/image';
import { useRouter } from 'next/router';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { BsFilePostFill } from 'react-icons/bs';
import { blogRoutes } from '~/components/blog/blogRoutes';
import beam from '~/assets/images/breams/beams.jpg';
import grid from '~/assets/images/breams/grid-01.png';
import { Posts } from '~/components/blog/types';
import { getWeekDifference } from '~/helpers';
import { Fragment } from 'react';

const BlogIndex = () => {
  const router = useRouter();

  return (
    <div className='flex flex-wrap justify-center min-h-screen'>
      <div className='flex items-center justify-around w-full h-auto py-40'>
        <Image src={beam} alt="" className="fixed z-[-10] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] top-40 left-2/4 -translate-x-2/3 -translate-y-1/2 max-w-none" />
        <Image src={grid} alt="" className="absolute [mask-image:linear-gradient(90deg,white,rgba(255,255,255,0))] top-0 left-0 -translate-y-28 w-[1500px] h-full opacity-5" />
        <div className='lg:w-6/12 w-full flex justify-center'>
          <div className=' text-indigo-600 absolute lg:top-20 lg:flex hidden pr-96'>
            <TiSocialInstagramCircular className='animate-spin' fontSize={300} style={{ animation: 'spin 25s linear infinite' }} />
          </div>
          <div className='antialiased text-4xl font-extrabold sm:text-6xl -skew-y-6'>
            <div className='lg:w-fit md:w-full w-full bg-white p-5 rounded-2xl shadow-lg'>
              <span className='text-indigo-600 mx-5'>Fav - </span>
              <span className='tracking-widest inline-flex align-middle'> BLOG</span>
            </div>
          </div>
        </div>
      </div>

      <span className='dark w-full'>
        <section className="bg-white dark:bg-gray-900 w-full z-10">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Step into the spotlight</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to the vibrant world where your ideas come alive. Join us,
                where we decode the secrets to engaging posts, tips and tricks and irresistible story ideass. And make your Instagram dreams a reality!</p>

              <button
                onClick={() => {
                  window.scrollTo({
                    top: 1000,
                    behavior: 'smooth'
                  });
                }}
                className="inline-flex items-center justify-center px-5 py-3 text-indigo-600 text-base font-medium text-center border border-indigo-600 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Get started
              </button>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
            </div>
          </div>
        </section>
      </span>

      <div className='flex flex-wrap justify-center w-full z-10 bg-gradient-to-r from-slate-50 to-slate-100 pb-20'>

        <section className="bg-gradient-to-r from-slate-50 to-slate-100 dark:bg-gray-900" id="postDiv">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">POSTS</h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {blogRoutes.map((page: Posts, index: number) => {
                return (
                  <article key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-5 text-gray-500">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <BsFilePostFill className='mr-1' />
                        {page.type}
                      </span>
                      <span className="text-sm">{getWeekDifference(page.createdAt)} weeks ago</span>
                    </div>
                    <h2 onClick={() => router.push(page.path)} className="mb-2 cursor-pointer text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{page.title}</h2>
                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400 line-clamp-3">{page.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                        <span className="font-medium dark:text-white">
                          {page.author}
                        </span>
                      </div>
                      <span onClick={() => router.push(page.path)} className="cursor-pointer inline-flex text-indigo-600 items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </span>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default BlogIndex;