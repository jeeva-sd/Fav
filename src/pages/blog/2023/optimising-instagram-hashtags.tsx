import { memo } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Headsection from '~/components/seo/Headsection';
import BlogLayout from '~/components/blog/BlogLayout';
import AuthorSection from '~/components/common/AuthorSection';
import { SeoParams } from '~/components/seo/types';
import { SD_optimiseHashtags } from '~/content/structuredData';
import choose from '~/assets/images/blog/choose.jpg';

const Image = dynamic(() => import('next/image'), { ssr: true });
const DynamicShareButtons = dynamic(() => import('~/components/common/Share'));

const TenHacks = () => {
  const { pathname } = useRouter();

  const seoParams: SeoParams = {
    title: 'Effective ways to use hashtags on Instagram posts',
    description: 'Effective ways to use hashtags on Insatgram. Choosing a right hashtags for your content is important because hashtags lets you to reach wider audience',
    keywords: 'Instagram hashtags, how to choose right hashtags for Instagarm, instagram, hashtags, instagram hashtags, hashtags for instagram, instagram hashtag generator',
    pageUrl: pathname,
    structuredData: SD_optimiseHashtags
  };

  return (
    <>
      <Headsection seoParams={seoParams} />

      <BlogLayout>
        <main className='pt-8 pb-16 lg:pt-8 lg:px-5 md:px-10 px-5 lg:pb-8 bg-white dark:bg-gray-900'>
          <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
            <header className='mb-4 lg:mb-6 not-format'>
              <AuthorSection date={'15 June 2023'} />
              <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>Effective ways to use hashtags on Instagram posts</h1>
            </header>

            <p className='lead text-gray-600'>
              From this article you get to know about how to get max out of Instagram hashtags such as how to choose right hashtags for Instagram. and get to know about to choose popular hashtags for Instagram or to choose trending hashtags for Instagram.
            </p>

            <p className='mt-3 text-gray-600'>
              Check out the <a href='https://favinsta.com/blog/2023/popular-hashtags'>popular Instagram hashtags</a> from our blog and get to know about <a href='https://favinsta.com/blog/2023/about-instagram-hashtags'>Instagram hashtags</a>.
            </p>

            <figure className='text-sm font-medium my-12'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={choose} alt='choosing right instagram hashtags' className='rounded-md aspect-video' />
              <figcaption>
                Photo by <a href='https://unsplash.com/@poleznova?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Maayan Nemanov</a> on <a href='https://unsplash.com/photos/gdMRXiTVMLI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
              </figcaption>
            </figure>

            <>
              <div className='max-w-3xl mx-auto pb-8'>
                <h2 className='text-2xl font-bold mb-2 mt-10'>Optimising Instagram Hashtags</h2>
                <p className='mb-4 text-gray-600'>
                  Instagram is the popular choice for sharing visual content and connecting with a wide audience. To make the most of your Instagram presence, one essential strategy is optimizing hashtags. Hashtags allow your content to be discovered by users who are interested in topics related to your posts. In this article, we will explore the best practices and techniques for optimizing Instagram hashtags, helping you increase your reach, engagement, and overall visibility on the platform.
                </p>
                <h2 className='text-2xl font-bold mb-2 mt-10'>Why Are Instagram Hashtags Important?</h2>
                <p className='mb-4 text-gray-600'>
                  Instagram hashtags allow users to discover posts related to their interests and enable content creators to reach a wider audience. By optimizing your hashtags, you increase the chances of your content being discovered by users who are not already following you. This increased visibility can lead to higher engagement, more followers, and potentially even collaborations with brands and influencers.
                </p>
                <h2 className='text-2xl font-bold mb-2 mt-10'>How to Choose the Right Hashtags for Instagram</h2>
                <p className='mb-4 text-gray-600'>
                  When selecting hashtags, aim for a balanced approach. Include a mix of popular hashtags to maximize exposure, as well as more niche hashtags to reach a targeted audience. Popular hashtags with millions of posts may offer high visibility but are also highly competitive. Niche hashtags with fewer posts may have a smaller audience but can provide greater engagement opportunities. Find the sweet spot that aligns with your content and audience.
                </p>
                <h2 className='text-2xl font-bold mb-2 mt-10'>Creating Branded Hashtags</h2>
                <p className='mb-4 text-gray-600'>
                  Creating branded hashtags is an excellent way to establish your brand identity and encourage user-generated content. By crafting a unique and memorable hashtag, you encourage your followers to engage with your brand and share their experiences. Branded hashtags also allow you to track and measure the success of your campaigns and user-generated content efforts.
                </p>
                <h2 className='text-2xl font-bold mb-2 mt-10'>Optimizing Hashtags for Local Reach</h2>
                <p className='mb-4 text-gray-600'>
                  If your business caters to a local audience, leveraging local hashtags can significantly boost your reach within your community. Include hashtags specific to your location, such as the name of your city or region. This approach helps you connect with potential customers or clients in your area and build a strong local presence.
                </p>
                <h2 className='text-2xl font-bold mb-2 mt-10'>Hashtag Placement in Instagram</h2>
                <p className='mb-4 text-gray-600'>
                  You can include hashtags in the caption itself or add them in the comments section. Each approach has its advantages. Placing hashtags in the caption makes them immediately visible to users scrolling through their feeds. On the other hand, adding hashtags in the comments section keeps the caption clean and clutter-free. Experiment with both methods and determine which works best for your content and engagement goals.
                </p>
                <h2 className='text-2xl font-bold mb-2 mt-10'>Using Hashtags in Instagram Stories</h2>
                <p className='mb-4 text-gray-600'>
                  In addition to using hashtags in your captions, you can also leverage them in your Instagram Stories. By adding relevant hashtags to your Stories, you increase the chances of appearing in the Stories Explore section. This feature exposes your content to a broader audience and offers an excellent opportunity to increase engagement and followers.
                </p>
                <h2 className='text-2xl font-bold mb-2 mt-10'>The Do&apos;s and Don&apos;ts of Hashtag Usage</h2>
                <p className='mb-4 text-gray-600'>
                  To ensure you make the most of your hashtag strategy, here are some essential do&apos;s and don&apos;ts to keep in mind:
                </p>
                <div className='mb-8'>
                  <h3 className='text-lg font-bold mb-2'>Do&apos;s:</h3>
                  <ul className='list-disc list-inside p-5 rounded-md bg-green-50 shadow-inner'>
                    <li>Do research and choose relevant hashtags for each post.</li>
                    <li>Do mix popular and niche hashtags.</li>
                    <li>Do monitor and track the performance of your hashtags.</li>
                    <li>Do engage with other users using hashtags.</li>
                    <li>Do create and promote branded hashtags.</li>
                  </ul>
                </div>
                <div className='mb-8'>
                  <h3 className='text-lg font-bold mb-2'>Don&apos;ts:</h3>
                  <ul className='list-disc list-inside p-5 rounded-md bg-red-50 shadow-inner'>
                    <li>Don&apos;t use irrelevant or misleading hashtags.</li>
                    <li>Don&apos;t overload your posts with too many hashtags.</li>
                    <li>Don&apos;t use banned or spammy hashtags.</li>
                    <li>Don&apos;t solely rely on generic hashtags.</li>
                    <li>Don&apos;t forget to adapt your strategy based on performance.</li>
                  </ul>
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