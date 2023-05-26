import React from 'react';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('next/image'));

const AboutHastag = () => {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'
    >
      <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
        <div className='flex items-center space-x-6 lg:space-x-8'>
          <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
            <div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
              <Image
                src={require('../../assets/images/with_like.jpg')}
                alt='Instagram like'
                quality={100}
                className='h-full w-full'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                quality={100}
                src={require('../../assets/images/money_girl.jpg')}
                alt='Earn through Instagram'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>

          <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                src={require('../../assets/images/mobile_in_desk.jpg')}
                alt='Instagram App'
                className='h-full object-cover object-center'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                src={require('../../assets/images/insta_girl.jpg')}
                alt='Content creator in Instagram'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                src={require('../../assets/images/instagram_mobile.jpg')}
                alt='Instagram Logo'
                className='h-full object-cover object-center'
              />
            </div>
          </div>

          <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                src={require('../../assets/images/content_light.jpg')}
                alt='Content creator in Instagram'
                className='h-full object-cover object-center'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                src={require('../../assets/images/hastag.jpg')}
                alt='Hastag generator Instagram'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutHastag;