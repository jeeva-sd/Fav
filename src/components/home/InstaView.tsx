import { memo } from 'react';
import dynamic from 'next/dynamic';

const AboutHastag = dynamic(() => import('./AboutHastag'));

const InstaView = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-b from-slate-50 via-white h-full to-white shadow-inner'>
      <div className='pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40'>
        <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>

          <div className='sm:max-w-lg'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Grow <span className='text-indigo-600'>Faster</span> in Instagram
            </h1>
            <p className='mt-4 text-xl text-gray-500'>
              Unlock the potential of your Instagram account with our expert tips and strategies to supercharge your growth.
              This guide will provide you with actionable insights to expand your reach, increase followers,
              and achieve your goals on Instagram.
            </p>
          </div>

          <div className='mt-10'>
            <AboutHastag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(InstaView);