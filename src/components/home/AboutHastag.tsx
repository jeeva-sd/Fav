import React from 'react';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('next/image'), { ssr: true });

const AboutHashtag = () => {
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
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={require('../../assets/images/blog/with_like.webp')}
                alt='Instagram like'
                className='h-full w-full'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={require('../../assets/images/blog/money_girl.webp')}
                alt='Earn through Instagram'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>

          <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={require('../../assets/images/blog/mobile_in_desk.webp')}
                alt='Instagram App'
                className='h-full object-cover object-center'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={require('../../assets/images/blog/insta_girl.webp')}
                alt='Content creator on Instagram'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={require('../../assets/images/blog/instagram_mobile.webp')}
                alt='Instagram Logo'
                className='h-full object-cover object-center'
              />
            </div>
          </div>

          <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={require('../../assets/images/blog/content_light.webp')}
                alt='Content creator on Instagram'
                className='h-full object-cover object-center'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={require('../../assets/images/blog/hastag.webp')}
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

export default AboutHashtag;