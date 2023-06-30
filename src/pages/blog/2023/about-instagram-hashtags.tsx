import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import BlogLayout from '~/components/blog/BlogLayout';
import Headsection from '~/components/seo/Headsection';
import AuthorSection from '~/components/common/AuthorSection';
import { SD_instagramHashtags } from '~/content/structuredData';
import { SeoParams } from '~/components/seo/types';
import hashtag_black from '~/assets/images/blog/hashtag_black.jpg';

const Image = dynamic(() => import('next/image'), { ssr: true });
const ShareButtons = dynamic(() => import('~/components/common/Share'));

const BlogContainer = ({ children }: any) => <div className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert`'>{children}</div>;

const InstagramHashtags = () => {
  const { pathname } = useRouter();
  const datePublished = '10 June 2023';

  const seoParams: SeoParams = {
    title: 'Instagram Hashtags - FAQ"s',
    description: 'Instagram hashtags for your post and get the answers for your hashtag related questions and make the best out of hashtags in Instagram',
    keywords: 'Instagram hashtags, instagram, hashtags, instagram hashtags, hashtags for instagram, hashtag generator, instagram hashtag generator',
    pageUrl: pathname,
    structuredData: SD_instagramHashtags
  };

  return (
    <>
      <Headsection seoParams={seoParams} />

      <BlogLayout>
        <main className='pt-8 pb-16 lg:pt-8 lg:px-5 md:px-10 px-5 lg:pb-8 bg-white dark:bg-gray-900'>

          <BlogContainer>
            <header className='mb-4 lg:mb-6 not-format'>
              <AuthorSection date={datePublished} />

              <h1 className='mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
                Instagram Hashtags - FAQ&apos;S
              </h1>

              <p>This article is about Instagram hashtags for your post and get the answers for your hashtag related questions and make
                the best out of hashtags in Instagram. Check out the <a href='https://favinsta.com/blog/2023/popular-hashtags'>popular Instagram hashtags</a> from our blog and get to know about <a href='https://favinsta.com/blog/2023/optimising-instagram-hashtags'>how to choose Instagram hashtags effectively</a> for your content.</p>

              <figure className='text-sm font-medium my-10'>
                <Image
                  width={700}
                  height={450}
                  quality={50}
                  loading='lazy'
                  decoding='async'
                  src={hashtag_black} alt='Instagram Notes ideas' className='rounded-md aspect-video' />
                <figcaption>
                  Photo by <a href='https://unsplash.com/pt-br/@gui_horovitz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Guilherme Lahmann</a> on <a href='https://unsplash.com/photos/c0xrT0QykL8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                </figcaption>
              </figure>
            </header>

            <div>
              <p className='my-10'>
                <strong className='text-lg w-full'>What are Instagram hashtags?</strong>
                <p className='text-gray-600'>Instagram hashtags are words or phrases preceded by the &apos;#&apos; symbol that categorize and organize content on the platform. They enable users to search and discover posts related to specific topics, themes, or interests.</p>
              </p>
              <p className='my-10'>
                <strong className='text-lg'>Why to use Instagram hashtags?</strong>
                <p className='text-gray-600'>Instagram hashtags are a great way to increase the discoverability of your content or products across Instagram. By choosing relevant hashtags for your posts, you can expand your reach beyond your existing followers and attract new users who are interested in your niche. Hashtags act as keywords, categorizing your content and making it easier for users to find. They enable you to tap into larger conversations and join communities that share similar interests.</p>
              </p>
              <p className='my-10'>
                <strong className='text-lg'>How do Instagram hashtags work?</strong>
                <p className='text-gray-600'>When you include hashtags in your Instagram posts, your content becomes searchable by users who follow or search for those hashtags. Hashtags help increase your post&apos;s visibility and reach a wider audience beyond your existing followers.</p>
              </p>
              <p className='my-10'>
                <strong className='text-lg'>How many hashtags should I use in a post?</strong>
                <p className='text-gray-600'>While Instagram allows up to 30 hashtags per post, it&apos;s advisable to use a moderate number to maintain readability and avoid appearing spammy. Using 5 to 15 relevant hashtags is generally considered effective.</p>
              </p>
              <p className='my-10'>
                <strong className='text-lg'>How to Choose the Right Hashtags for Instagram?</strong>
                <p className='text-gray-600'>When selecting hashtags for your Instagram posts, it&apos;s important to strike a balance between popularity and specificity. Using highly popular hashtags may expose your content to a larger audience, but it also means facing tough competition. On the other hand, using niche-specific hashtags allows you to target a more specific audience who are more likely to engage with your content. It&apos;s recommended to use a combination of both popular and niche hashtags to maximize your visibility while maintaining relevance.</p>
              </p>
              <p className='my-10'>
                <strong className='text-lg'>The Do&apos;s and Don&apos;ts of Using Instagram Hashtags</strong>
                <p className='text-gray-600'>To make the most out of your Instagram hashtag strategy, it&apos;s essential to understand the do&apos;s and don&apos;ts of using hashtags. Here are some guidelines to keep in mind:</p>
              </p>
              <ul className='list-disc list-inside my-10 border p-5 rounded-md bg-green-50 shadow-inner'>
                <li className='text-gray-600'>Do use relevant hashtags that accurately describe your content.</li>
                <li className='text-gray-600'>Do research and experiment with different hashtag combinations.</li>
                <li className='text-gray-600'>Do create branded hashtags to foster community engagement.</li>
                <li className='text-gray-600'>Do analyze hashtag performance and make adjustments accordingly.</li>
              </ul>
              <ul className='list-disc list-inside my-10 border p-5 rounded-md bg-red-50 shadow-inner'>
                <li className='text-gray-600 mb-5'>Don&apos;t use too many hashtags in a single post. Stick to a reasonable number (between 5 to 15) to maintain readability.</li>
                <li className='text-gray-600'>Don&apos;t use banned or restricted hashtags. These are hashtags that violate Instagram&apos;s community guidelines and could result in your content being hidden or removed.</li>
              </ul>
            </div>


            <div>
              <ShareButtons url={pathname} />
            </div>
          </BlogContainer>
        </main>

      </BlogLayout>
    </>
  );
};

export default InstagramHashtags;