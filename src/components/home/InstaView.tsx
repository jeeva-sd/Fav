import { memo } from 'react';
import Image from 'next/image';
import instaGirl from '../../assets/images/insta_girl.jpg';
import manAndLike from '../../assets/images/with_like.jpg';
import instaDisplay from '../../assets/images/instagram_mobile.jpg';
import moneyGirl from '../../assets/images/money_girl.jpg';
import contentLight from '../../assets/images/content_light.jpg';
import hastag from '../../assets/images/hastag.jpg';
import mobileInDesk from '../../assets/images/mobile_in_desk.jpg';

const InstaView =()=> {

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white h-full to-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Grow Faster in Instagram
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Unlock the potential of your Instagram account with our expert tips and strategies to supercharge your growth. This guide will provide you with actionable insights to expand your reach, increase followers, and achieve your goals on Instagram.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          src={manAndLike}
                          alt=""
                          quality={100}
                          className="h-full w-full"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          quality={100}
                          src={moneyGirl}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={mobileInDesk}
                          alt=""
                          className="h-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={instaGirl}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={instaDisplay}
                          alt=""
                          className="h-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={contentLight}
                          alt=""
                          className="h-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={hastag}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                  Shop Collection
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(InstaView);