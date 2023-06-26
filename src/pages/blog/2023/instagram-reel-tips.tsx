import { memo } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Headsection from '~/components/seo/Headsection';
import BlogLayout from '~/components/blog/BlogLayout';
import AuthorSection from '~/components/common/AuthorSection';
import { SD_InstagramTips } from '~/content/structuredData';
import { SeoParams } from '~/components/seo/types';

const Image = dynamic(() => import('next/image'), { ssr: true });
const ShareButtons = dynamic(() => import('~/components/common/Share'));

const InstagramReelTips = () => {
  const { pathname } = useRouter();

  const seoParams: SeoParams = {
    title: 'Instagram Tips and Tricks - 2023',
    description: 'This article shares about the tips and tricks to Create Engaging Instagram content. By following these tips, you can create engaging Instagram Reels that will help you connect with your audience and grow your following.',
    keywords: 'instagram, reels, tips, tricks, engagement, music, short, sweet, planning, text, captions, personality, filters, effects, collaboration, behind-the-scenes',
    pageUrl: pathname,
    structuredData: SD_InstagramTips
  };

  return (
    <>
      <Headsection seoParams={seoParams} />
      <BlogLayout>
        <main className='pt-8 pb-16 lg:pt-8 lg:px-5 md:px-10 px-5 lg:pb-8 bg-white dark:bg-gray-900'>
          <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
            <header className='mb-4 lg:mb-6 not-format'>
              <AuthorSection date={'27 April 2023'} />
              <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>Instagram Tips and Tricks 2023 | Secrets of Instagram</h1>
            </header>
            <>
              <p className='mt-5 lead'>
                Instagram Reels, the most interesting feature recently introduced by Instagram, is taking the digital world. The feature allows the users to create short-form videos with a time limit of 60 seconds, synced to music and shareable with your followers. This has created an opportunity for individuals and businesses to connect with your audience in an innovative and exciting way. Thus, in this article, we shall dive into some of tips and tricks to create interesting content on Instagram Reels.
              </p>

              <div className='my-16'>
                <h2 className='mt-10 mb-2'><strong>1. Choose the Right Music:</strong></h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async' src={require('~/assets/images/blog/music.webp')} alt='Music' className='rounded-md aspect-video' />
                  <figcaption>
                    Photo by <a href="https://unsplash.com/@namroud?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Namroud Gorguis</a> on <a href="https://unsplash.com/images/blog/things/music?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </figure>

                <p>
                  It is important to select the appropriate track that complements your content. One can browse through Instagram&apos;s music library or opt for your original audio to create an interesting Reel. It is so important to choose music that aligns with your audience and suits your video at the same time.
                </p>
              </div>

              <div className='my-16'>
                <h2 className='mt-10 mb-2'><strong>2. Keep it Short and Sweet:</strong></h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async' src={require('~/assets/images/blog/short.webp')} alt='Engaging Instagram content' className='rounded-md aspect-video' />
                  <figcaption>
                    Photo by <a href="https://unsplash.com/@cristian1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cristian Escobar</a> on <a href="https://unsplash.com/wallpapers/cool/good?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </figure>

                <p>
                  Instagram Reels is designed for short-form videos, and with a mere 60 seconds to make an impact, the content must be concise and engaging. Trim your footage and only keep the most significant parts to ensure that your audience remains engaged.
                </p>
              </div>

              <div className='my-16'>
                <h2 className='mt-10 mb-2'><strong>3. Plan Your Content:</strong></h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality=
                      {50}
                    loading='lazy'
                    decoding='async' src={require('~/assets/images/blog/plan.webp')} alt='plan your content' className='rounded-md aspect-video' />
                  <figcaption>
                    Photo by <a href="https://unsplash.com/@glenncarstenspeters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Glenn Carstens-Peters</a> on <a href="https://unsplash.com/photos/RLw-UC03Gwc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </figure>

                <p>
                  Advance planning of your content is highly recommended. Determine the main theme, message, and objective of your video. If you&apos;re creating content for your brand, ensure that it aligns with your overall marketing strategy, so your efforts make proper return on investment.
                </p>
              </div>

              <div className='my-16'>
                <h2 className='mt-10 mb-2'><strong>4. Use Text and Captions:</strong></h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async' src={require('~/assets/images/blog/caption.webp')} alt='Use Text and Captions on Instagram' className='rounded-md aspect-video' />
                  <figcaption>
                    Photo by <a href="https://unsplash.com/@lemonvlad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vladislav Klapin</a> on <a href="https://unsplash.com/photos/PVr9Gsj93Pc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </figure>

                <p>
                  Integrating text and captions to your Reels is a brilliant way to provide context and increase engagement. Employ innovative captions to make your Reel stand out from the crowd. Moreover, text overlays can be utilized to emphasize essential information or add a touch of humor to your video.
                </p>
              </div>

              <div className='my-16'>
                <h2 className='mt-10 mb-2'><strong>5. Show Your Personality:</strong></h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async' src={require('~/assets/images/blog/personality.webp')} alt='About you' className='rounded-md aspect-video' />
                  <figcaption>
                    Photo by <a href="https://unsplash.com/@anthonytran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anthony Tran</a> on <a href="https://unsplash.com/photos/P_-SnAnRSU4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </figure>

                <p>
                  Instagram Reels gives an exceptional opportunity to exhibit your personality and connect with your audience on a personal level. So showcase your unique personality traits, and remain authentic to build a genuine connection with your audience.
                </p>
              </div>

              <div className='my-16'>
                <h2 className='mt-10 mb-2'><strong>6. Use Filters and Effects:</strong></h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async' src={require('~/assets/images/blog/filters.webp')} alt='Instagram Filters' className='rounded-md aspect-video' />
                  <figcaption>
                    Photo by <a href="https://unsplash.com/@iamkendall?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kendall Ruth</a> on <a href="https://unsplash.com/photos/AijuW-HlE30?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </figure>

                <p>
                  Instagram provides a multiple filters and effects to enhance the aesthetics of your Reels. Experiment with various filters and effects to determine which ones best complement your content.
                </p>
              </div>

              <div className='my-16'>
                <h2 className='mt-10 mb-2'><strong>7. Collaborate with Others:</strong></h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async' src={require('~/assets/images/blog/join.webp')} alt='Collaborate with Others' className='rounded-md aspect-video' />
                  <figcaption>
                    Photo by <a href="https://unsplash.com/@cytonn_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cytonn Photography</a> on <a href="https://unsplash.com/photos/n95VMLxqM2I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </figure>

                <p>
                  Collaborating with other creators or brands is an excellent strategy to boost your reach and engagement on Instagram. Check out other creators or brands in your niche and work together.
                </p>
              </div>

              <div className='my-16'>
                <h2 className='mt-10 mb-2'><strong>8. Share Behind the Scenes:</strong></h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async' src={require('~/assets/images/blog/behind_the_scene.webp')} alt='Share Behind the Scenes on Instagram' className='rounded-md aspect-video' />
                  <figcaption>
                    Photo by <a href="https://unsplash.com/@henmankk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Keagan Henman</a> on <a href="https://unsplash.com/photos/pPxJTtxfV1A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </figure>

                <p>
                  Instagram Reels provides an opportunity to reveal the process behind your brand or personal life. Sharing behind-the-scenes footage adds a personal touch and engagement with your audience.
                </p>
              </div>

              <div className='mt-10'>
                <p>
                  To summarize, Instagram Reels is an exceptional feature to engage with your audience in a creative. Experimenting and testing out new ideas is the key to keep your content fresh and interesting.
                </p>
              </div>
            </>

            <div>
              <ShareButtons url={pathname} />
            </div>
          </article>
        </main>
      </BlogLayout>
    </>
  );
};

export default memo(InstagramReelTips);