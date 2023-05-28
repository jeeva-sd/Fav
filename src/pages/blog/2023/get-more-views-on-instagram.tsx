import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Headsection from '~/components/seo/Headsection';
import BlogLayout from '~/components/blog/BlogLayout';
import AuthorSection from '~/components/common/AuthorSection';
import { SeoParams } from '~/components/seo/types';

const Image = dynamic(() => import('next/image'), { ssr:true });
const ShareButtons = dynamic(() => import('~/components/common/Share'));
const Container = ({ children }: React.PropsWithChildren) => <div className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert`'>{children}</div>;

const MoreViews = () => {
  const { pathname } = useRouter();
  const seoParams: SeoParams= {
    title: 'How to Get More Views and Followers on Instagram?',
    description: 'By following these tips, you can get more views and followers on Instagram and grow your audience.',
    keywords: 'instagram, views, followers, tips, tricks, engagement, hashtags, posting, profile, bio, content, social media',
    pageUrl: pathname,
  };

  return (
    <>
      <Headsection seoParams={seoParams}/>

      <BlogLayout>
        <main className='pt-8 pb-16 lg:pt-16 lg:px-5 md:px-10 px-5 lg:pb-24 bg-white dark:bg-gray-900'>
          <Container>
            <header className='mb-4 lg:mb-6 not-format'>
              <AuthorSection date={'23 May 2023'}/>
              <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
                            How to get more views and followers in Instagram ?
              </h1>

              <div className='my-5'>
                            Instagram is a famous social media platform that has received massive reputation over the years. With over 1 billion monthly active users, it has become a hub for sharing snap shots, motion pictures, and testimonies. Whether you&apos;re a commercial enterprise owner or a casual user, it&apos;s helpful to know some key notes about Instagram. This will help you get the maximum out of the platform. Here are some guidelines and tricks to don&apos;t forget when the usage of Instagram:
                <div className='my-5 mb-10'>
                  <ul>
                    <li className='p-1 text-gray-800 font-medium'>Keep Your Profile Attractive and Consistent</li>
                    <li className='p-1 text-gray-800 font-medium'>Use hashtags efficiently</li>
                    <li className='p-1 text-gray-800 font-medium'>Engage with Your Followers</li>
                    <li className='p-1 text-gray-800 font-medium'>Post Regularly and on the Optimal Times</li>
                    <li className='p-1 text-gray-800 font-medium'>Use Instagram Stories</li>
                    <li className='p-1 text-gray-800 font-medium'>Consider Instagram Ads </li>
                  </ul>
                </div>
                <hr />
              </div>
            </header>

            <div className='mt-10'>
              <div className='mb-4'>
                <h2 className='text-lg font-bold mb-2'>1. Keep Your Profile Attractive and Consistent</h2>
                <figure className='text-sm font-medium mt-5 mb-10'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async'
                    src={require('~/assets/images/blog/insight.webp')} alt='' className='rounded-md object-cover' />
                  <figcaption>Photo by <a className='underline text-blue-600' href="https://unsplash.com/@georgiadelotz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Georgia de Lotz</a> on <a className='underline text-blue-600' href='https://unsplash.com/images/blog/apps/instagram?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                  </figcaption>
                </figure>
                <p className='text-gray-800'>Your Instagram profile is your digital persona and the first aspect human beings see when visiting your web page. So, it is critical to make it look true and consistent. Choose a profile image that represents your logo or yourself and create a bio that explains what you do and what you provide. Use the same color schemes, fonts, and design elements to your posts to look cohesive and expert.</p>
              </div>

              <div className='mt-16'>
                <h2 className='text-lg font-bold mb-2'>2. Use Hashtags Efficiently</h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async'
                    src={require('~/assets/images/blog/hastag_container.webp')} alt='' className='rounded-md object-cover' />
                  <figcaption>Photo by <a className='underline text-blue-600' href="https://unsplash.com/pt-br/@janbaborak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jan Baborák</a> on <a className='underline text-blue-600' href='https://unsplash.com/images/blog/apps/instagram?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                  </figcaption>
                </figure>

                <p className='text-gray-800'>Hashtags are one of the maximum effective equipment on Instagram, and that they can help you reach a much wider audience. Use relevant hashtags for your posts and stories to lead them to discoverable by way of human beings interested in your area of interest. You also can create a branded hashtag to sell your logo and encourage your fans to use it.</p>
              </div>

              <div className='mt-16'>
                <h2 className='text-lg font-bold mb-2'>3. Engage with Your Followers</h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async'
                    src={require('~/assets/images/blog/followers.webp')} alt='' className='rounded-md object-cover' />
                  <figcaption>Photo by <a className='underline text-blue-600' href="https://unsplash.com/@storyfuel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Melanie Deziel</a> on <a className='underline text-blue-600' href='https://unsplash.com/images/blog/apps/instagram?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                  </figcaption>
                </figure>

                <p className='text-gray-800'>Engagement is fundamental to constructing a loyal and engaged Instagram following. Respond to feedback and messages, and ask questions for your captions to inspire your followers to engage with your content material. Follow your fans lower back, like their posts, and depart authentic remarks on their content material. This enables build a network around your brand and encourages people to interact with your content material.</p>
              </div>

              <div className='mt-16'>
                <h2 className='text-lg font-bold mb-2'>4. Post Regularly and on the Optimal Times</h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async'
                    src={require('~/assets/images/blog/post_regular_time.webp')} alt='' className='rounded-md object-cover' />
                  <figcaption>Photo by <a className='underline text-blue-600' href="https://unsplash.com/@ikukevk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kevin Ku</a> on <a className='underline text-blue-600' href='https://unsplash.com/images/blog/apps/instagram?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                  </figcaption>
                </figure>

                <p className='text-gray-800'>Posting frequently is fundamental to keeping your followers engaged and attract new ones. Try to put up at the least as soon as a day, but do not post too much, as it could look spammy. Additionally, posting at premiere times will let you attain greater people. Use Instagram insights to look when your fans are most energetic and put up therefore.</p>
              </div>

              <div className='mt-16'>
                <h2 className='text-lg font-bold mb-2'>5. Use Instagram Stories </h2>

                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async'
                    src={require('~/assets/images/blog/stories.webp')} alt='' className='rounded-md object-cover' />
                  <figcaption>Photo by <a className='underline text-blue-600' href="https://unsplash.com/@tunahangunkan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tunahan Günkan</a> on <a className='underline text-blue-600' href='https://unsplash.com/images/blog/apps/instagram?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                  </figcaption>
                </figure>

                <p className='text-gray-800'>Instagram Stories are an effective way to show your brand&apos;s personality and create a connection with your audience. Use stories to share behind-the-scenes footage, showcase your products, and give your followers a glimpse into your everyday life. You can also use stories to host polls, Q&As, and other interactive features to engage with your followers.</p>
              </div>

              <div className='mt-16'>
                <h2 className='text-lg font-bold mb-2'>6. Consider Instagram Ads </h2>
                <figure className='text-sm font-medium mb-10 mt-5'>
                  <Image
                    width={700}
                    height={450}
                    quality={50}
                    loading='lazy'
                    decoding='async'
                    src={require('~/assets/images/blog/ads.webp')} alt='' className='rounded-md object-cover' />
                  <figcaption>Photo by <a className='underline text-blue-600' href="https://unsplash.com/@anthonyrosset?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anthony Rosset</a> on <a className='underline text-blue-600' href='https://unsplash.com/images/blog/apps/instagram?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                  </figcaption>
                </figure>

                <p className='text-gray-800'>Instagram ads are an effective way to reach a large audience and promote your brand or product. You can create ads that appear in people&apos;s feeds, stories, and page reviews. Instagram&apos;s advertising platform allows you to target specific audiences based on location, interests, demographics and more.</p>
              </div>

              <div className='my-10'>
                <p className='text-gray-800'>
                    Finally, these are some important Instagram tips that can help you get the most out of the platform. By following these tips and tricks, you can build a strong brand presence, connect with your followers, and reach a larger audience. Remember to stay consistent, be creative, and have fun!
                </p>
              </div>
            </div>
            <div>
              <ShareButtons url={pathname} />
            </div>
          </Container>
        </main>

      </BlogLayout>
    </>
  );
};

export default memo(MoreViews);