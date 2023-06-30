import { memo } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Headsection from '~/components/seo/Headsection';
import BlogLayout from '~/components/blog/BlogLayout';
import AuthorSection from '~/components/common/AuthorSection';
import { SeoParams } from '~/components/seo/types';
import captions from '~/assets/images/blog/captions.jpg';
import { postCaptions } from '~/content/captions';

const Image = dynamic(() => import('next/image'), { ssr: true });
const DynamicShareButtons = dynamic(() => import('~/components/common/Share'));

const TenHacks = () => {
  const { pathname } = useRouter();

  const seoParams: SeoParams = {
    title: 'Best Instagram captions for your post',
    description: 'This page contains best and trending captions for your Instagram posts',
    keywords: 'Instagram captions, captions, post captions, photo captions',
    pageUrl: pathname,
    structuredData: null
  };

  return (
    <>
      <Headsection seoParams={seoParams} />

      <BlogLayout>
        <main className='pt-8 pb-16 lg:pt-8 lg:px-5 md:px-10 px-5 lg:pb-8 bg-white dark:bg-gray-900'>
          <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
            <header className='mb-4 lg:mb-6 not-format'>
              <AuthorSection date={'30 June 2023'} />
              <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>Best Instagram captions for your posts</h1>
            </header>

            <p className='lead text-gray-600'>
							Instagram post captions are more than just a words about your photos. They serve as an opportunity to convey your message and showcase your personality. Well-crafted captions can capture attention, evoke emotions, and encourage users to interact with your posts through likes, comments, and shares.
            </p>

            <figure className='text-sm font-medium my-12'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={captions} alt='choosing right instagram hashtags' className='rounded-md aspect-video' />
              <figcaption>
								Photo by <a href="https://unsplash.com/@monicadear?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Monica Flores</a> on <a href="https://unsplash.com/photos/p4mFOzM-asQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </figcaption>
            </figure>

            <>
              <div className="max-w-3xl mx-auto pb-4">
                <h2 className="text-2xl font-bold mt-5 mb-5">Here are some of captions which may enhance your Instagram post</h2>

                {postCaptions.map((captionObj: any, index: number) => {
                  return (
                    <div key={index} className='my-10  p-5 rounded-md'>
                      <div className='text-lg font-semibold uppercase w-fit px-4 rounded-md p-2'># {captionObj.mood}</div>
                      <div className='flex flex-wrap gap-1 bg-gray-50 border-dashed hover:border-solid border-2 hover:shadow-lg transition-all rounded-md p-5'>
                        {captionObj?.captions.map((caption: any, i: number) => {
                          return (
                            <div key={i} className='text-gray-700 w-full cursor-pointer'>{i + 1}. <span className='select-all'>{caption}</span></div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                <div className='text-gray-700'>
									Feel free to use these captions to add depth and emotion to your photos, and to express different facets of your mood and experiences. Enjoy capturing and sharing your moments!
                </div>
              </div>
            </>

            <div>
              <DynamicShareButtons url={pathname} />
            </div>
          </article>
        </main>
      </BlogLayout>
    </>
  );
};

export default memo(TenHacks);