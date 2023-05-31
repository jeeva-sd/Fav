import { memo } from 'react';
import dynamic from 'next/dynamic';

const AboutHashtag = dynamic(() => import('./AboutHastag'));

const InstaView = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40'>
        <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>

          <div className='sm:max-w-lg'>
            <h2 className='text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white mb-4'>
              Grow <span className='text-indigo-600 text-5xl mx-2'> #FASTER </span> in Instagram
            </h2>
            <p className='mt-4 text-xl text-gray-500'>
              Unlock the potential of your Instagram account with our expert tips and strategies to supercharge your growth.
              This guide will provide you with actionable insights to expand your reach, increase followers,
              and achieve your goals on Instagram.
            </p>
          </div>

          <div className='mt-10'>
            <AboutHashtag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(InstaView);