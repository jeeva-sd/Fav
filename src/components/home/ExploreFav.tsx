import React from 'react';
import { useRouter } from 'next/router';
import { BiHash } from 'react-icons/bi';
import { FcAbout } from 'react-icons/fc';
import { FaBloggerB } from 'react-icons/fa';
import { AiFillCamera } from 'react-icons/ai';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { BsArrowRight, BsClockHistory } from 'react-icons/bs';
import { ExploreContents } from './types';

const ExploreFav = () => {
  const { push } = useRouter();

  const contents:ExploreContents[] = [
    {
      title: 'Instagram Hastag Generator',
      icon: <BiHash color='blue'/>,
      description: 'Generate effective hastags for your content and increase the chance of getting known by your targeted audience',
      isLive: false,
      path: '',
    },
    {
      title: 'Instagram Camera Effects',
      icon: <AiFillCamera color='red'/>,
      description: 'Create and save your favorite filter from the collection of available filters live with favinsta.com.',
      isLive: false,
      path: ''
    },
    {
      title: 'Fav Blog',
      icon: <FaBloggerB color='orange'/>,
      description: 'Fav blog contains creative and useful blog posts which helps you and your product to achieve your Instagram goals.',
      isLive: true,
      path: '/blog',
      isNew: true
    },
    {
      title: 'About Instagram Notes',
      icon: <FcAbout />,
      description: 'A blog post about Instagram Notes which give you a clear idea about Instagram notes and how to use it effectively.',
      isLive: true,
      path: '/blog/2023/about-instagram-notes'
    },
    {
      title: 'Instagram Tips and Tricks',
      icon: <MdOutlineTipsAndUpdates color='green'/>,
      description: 'A blog post which let you know about more cool features of Instagram which helps you to make effective content.',
      isLive: true,
      path: '/blog/2023/ten-hacks'
    },
    {
      title: 'Instagarm Stroy Ideas',
      icon: <BsClockHistory color='purple'/>,
      description: 'A blog about Instagram stories which makes your Instagram story more effective towards your product or to engage with your followers.',
      isLive: true,
      path: 'blog/2023/story-ideas'
    }
  ];

  return (
    <section className='dark:bg-gray-900 bg-gradient-to-r min-h-screen flex items-center overflow-hidden border'>
      <div className='py-8 px-4 mx-auto w-full sm:py-16 lg:px-6'>

        <div className='relative py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 rounded-md'>
          <div className='relative max-w-screen-md mb-8 lg:mb-16'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>Explore <span className='text-indigo-600 mx-2'>#FavInsta</span></h2>
            <p className='text-gray-500 sm:text-xl dark:text-gray-400'>By utilizing FavInsta, you can incraese your profile visibility, product awarness, gain organic followers and more.</p>
          </div>

          <div className='relative space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
            {contents.map((content:ExploreContents, index:number) => {
              const {title, icon, description, isLive, path, isNew} = content;

              return (
                <div key={index}>
                  <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-3xl'>
                    {icon}
                  </div>
                  <div className='flex items-center'><h3 className='mb-2 text-xl font-bold dark:text-white'>{title}</h3> {isNew && <span className='animate-bounce mx-3 bg-orange-400 px-2 rounded-md text-white'>New</span>}</div>
                  <p className='text-gray-500 dark:text-gray-400'>{description}</p>
                  <div className='mt-3 text-sm text-gray-600'>{isLive ? <div className='w-fit flex justify-start items-center cursor-pointer text-indigo-600 hover:underline' onClick={() => push(path)}>Explore <BsArrowRight className='ml-2' /></div> : <span className='cursor-not-allowed'>Coming soon</span>}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExploreFav;