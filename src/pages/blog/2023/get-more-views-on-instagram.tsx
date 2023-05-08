import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BlogLayout from '~/components/blog/BlogLayout';
import tips from '../../../assets/images/instagram_tips.jpg';
import ShareButtons from '~/components/common/Share';

const MoreViews = () => {
  const { pathname } = useRouter();

  const Container = ({ children }: React.PropsWithChildren) => <div className='
mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert
`'>{children}</div>;

  return (
    <BlogLayout>
      <main className="pt-8 pb-16 lg:pt-16 lg:px-5 md:px-10 px-5 lg:pb-24 bg-white dark:bg-gray-900">
        <Container>
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <Image height={16} width={16} className="mr-4 w-16 h-16 rounded-full" src={tips} alt="Jese Leos" />
                <div>
                  <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jeeva B</a>
                  <p className="text-base font-light text-gray-500 dark:text-gray-400">Software Developer</p>
                  <p className="text-base font-light text-gray-500 dark:text-gray-400"><time title="February 8th, 2022">May 05, 2023</time></p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            How to get more views and followers in Instagram ?
            </h1>

            <div className='my-5'>
                            Instagram is a famous social media platform that has received massive reputation over the years. With over 1 billion monthly active users, it has become a hub for sharing snap shots, motion pictures, and testimonies. Whether you&apos;re a commercial enterprise owner or a casual user, it&apos;s helpful to know some key notes about Instagram. This will help you get the maximum out of the platform. Here are some guidelines and tricks to don&apos;t forget when the usage of Instagram:
              <div className='my-5 mb-10'>
                <li className="bg-white shadow-sm rounded-lg p-1 text-gray-800 font-medium">Keep Your Profile Attractive and Consistent</li>
                <li className="bg-white shadow-sm rounded-lg p-1 text-gray-800 font-medium">Use hashtags efficiently</li>
                <li className="bg-white shadow-sm rounded-lg p-1 text-gray-800 font-medium">Engage with Your Followers</li>
                <li className="bg-white shadow-sm rounded-lg p-1 text-gray-800 font-medium">Post Regularly and on the Optimal Times</li>
                <li className="bg-white shadow-sm rounded-lg p-1 text-gray-800 font-medium">Use Instagram Stories</li>
                <li className="bg-white shadow-sm rounded-lg p-1 text-gray-800 font-medium">Consider Instagram Ads </li>
              </div>
              <hr />
            </div>
          </header>

          <div className="mt-10">
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">1. Keep Your Profile Attractive and Consistent</h3>
              <p className="text-gray-800">Your Instagram profile is your digital persona and the first aspect human beings see when visiting your web page. So, it is critical to make it look true and consistent. Choose a profile image that represents your logo or yourself and create a bio that explains what you do and what you provide. Use the same color schemes, fonts, and design elements to your posts to look cohesive and expert.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">2. Use Hashtags Efficiently</h3>
              <p className="text-gray-800">Hashtags are one of the maximum effective equipment on Instagram, and that they can help you reach a much wider audience. Use relevant hashtags for your posts and stories to lead them to discoverable by way of human beings interested in your area of interest. You also can create a branded hashtag to sell your logo and encourage your fans to use it.</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">3. Engage with Your Followers</h3>
              <p className="text-gray-800">Engagement is fundamental to constructing a loyal and engaged Instagram following. Respond to feedback and messages, and ask questions for your captions to inspire your followers to engage with your content material. Follow your fans lower back, like their posts, and depart authentic remarks on their content material. This enables build a network around your brand and encourages people to interact with your content material.</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">4. Post Regularly and on the Optimal Times</h3>
              <p className="text-gray-800">Posting frequently is fundamental to keeping your followers engaged and attract new ones. Try to put up at the least as soon as a day, but do not post too much, as it could look spammy. Additionally, posting at premiere times will let you attain greater people. Use Instagram insights to look when your fans are most energetic and put up therefore.</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">5. Use Instagram Stories </h3>
              <p className="text-gray-800">Instagram Stories are an effective way to show your brand&apos;s personality and create a connection with your audience. Use stories to share behind-the-scenes footage, showcase your products, and give your followers a glimpse into your everyday life. You can also use stories to host polls, Q&As, and other interactive features to engage with your followers.</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">6. Consider Instagram Ads </h3>
              <p className="text-gray-800">Instagram ads are an effective way to reach a large audience and promote your brand or product. You can create ads that appear in people&apos;s feeds, stories, and page reviews. Instagram&apos;s advertising platform allows you to target specific audiences based on location, interests, demographics and more.</p>
            </div>

            <div className="my-10">
              <p className="text-gray-800">
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
  );
};

export default MoreViews;