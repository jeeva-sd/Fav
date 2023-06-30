import { memo, useDeferredValue, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Headsection from '~/components/seo/Headsection';
import BlogLayout from '~/components/blog/BlogLayout';
import AuthorSection from '~/components/common/AuthorSection';
import { SeoParams } from '~/components/seo/types';
import { hashtagData, popularHashtags } from '~/content/hashtags';
import popularHashtagImage from '~/assets/images/blog/popular_hashtags.jpg';

const Image = dynamic(() => import('next/image'), { ssr: true });
const DynamicShareButtons = dynamic(() => import('~/components/common/Share'));

const TenHacks = () => {
  const { pathname } = useRouter();
  const [searchText, setSearchText] = useState('');
  const deferredSearchText = useDeferredValue(searchText);

  const seoParams: SeoParams = {
    title: 'Most Popular and Trending Hashtags for Instagram',
    description: 'list of popular and trending hashtags for instagram which helps you to get more views and likes on Instagram',
    keywords: 'Instagram hashtags, popular hashtags, trending hashtags, hashtags, hashtag generator, instagram hashtag generator',
    pageUrl: pathname,
    structuredData: null
  };

  const hashtagList = useMemo(() => {
    return hashtagData.filter((data) => {
      return (
        data.hashtag.toLowerCase().includes(deferredSearchText.toLowerCase()) ||
        data.relatedHashtags.some((relatedTag) =>
          relatedTag.toLowerCase().includes(deferredSearchText.toLowerCase())
        )
      );
    });
  }, [deferredSearchText]);

  return (
    <>
      <Headsection seoParams={seoParams} />

      <BlogLayout>
        <main className='pt-8 pb-16 lg:pt-8 lg:px-5 md:px-10 px-5 lg:pb-8 bg-white dark:bg-gray-900'>
          <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>

            <header className='mb-4 lg:mb-6 not-format'>
              <AuthorSection date={'25 June 2023'} />
              <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>Most Popular and Trending Hashtags for Instagram</h1>
            </header>

            <figure className='text-sm font-medium my-10'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={popularHashtagImage} alt='choosing right instagram hashtags' className='rounded-md aspect-video' />
              <figcaption>
                Photo by <a href="https://unsplash.com/@arstyy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Austin Neill</a> on <a href="https://unsplash.com/photos/hgO1wFPXl3I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </figcaption>
            </figure>
            <p className='lead text-gray-600'>
              Instagram hashtags are a great way to increase the discoverability of your content or products across Instagram. By choosing relevant hashtags for your posts, you can expand your reach beyond your existing followers and attract new users who are interested in your niche. Hashtags act as keywords, categorizing your content and making it easier for users to find. They enable you to tap into larger conversations and join communities that share similar interests.
            </p>

            <p className='mt-6 text-gray-600'>
              Here we listed some of most popular Instagram hashtags for you and to know more about hashtags <a href='https://favinsta.com/blog/2023/about-instagram-hashtags'>read this article</a> and to know how to use hashtags properly <a href='https://favinsta.com/blog/2023/optimising-instagram-hashtags'>check out this article</a>
            </p>

            <>
              <div className="max-w-3xl mx-auto pb-8">
                <h2 className="text-2xl font-bold mb-2 mt-10">Some of most popular Hashtags</h2>
                <div className="mb-4 text-gray-600 flex flex-wrap w-full my-4 p-5 rounded-md border bg-indigo-50 shadow-inner">
                  {popularHashtags.sort().map((data: any, index: number) => {
                    return (
                      <div key={index} className='w-5/12 flex m-1 font-light'>
                        {data}
                      </div>
                    );
                  })}
                </div>

                <h2 className="text-2xl font-bold mb-2 mt-10">Related trending hashtags</h2>
                <p className='text-gray-600 text-base'>Here some of its related hashtags which might be useful for your reach. These related hashtags are trending across Instagram
                  so there is a great chance that your profile get viewd by your targeted audience</p>
                <div>
                  <input type='search'
                    placeholder='search here'
                    value={searchText}
                    onChange={(e: any) => setSearchText(e?.target?.value)}
                    className='border my-5 border-gray-300 focus:outline-none focus:border-indigo-600 w-full rounded-md p-2'
                  />
                </div>
                <div className="mb-4 text-gray-600 flex flex-wrap justify-evenly gap-2">
                  {hashtagList.map((data: any, index: number) => {
                    return (
                      <div key={index} className='lg:w-5/12 md:w-full w-full py-5'>
                        <h3 className='font-bold ml-2'>{data.hashtag}</h3>
                        <div className='flex flex-wrap border rounded-md p-5 bg-indigo-50 shadow-inner gap-1'>
                          {data.relatedHashtags.sort().map((relatedTag: any, index: number) => {
                            return (
                              <div className='w-full text-sm' key={index}>
                                {relatedTag}
                              </div>
                            );
                          })}

                        </div>
                      </div>
                    );
                  })}
                  {hashtagList.length === 0 && <div className='text-gray-600'>No hashtags found</div>}
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