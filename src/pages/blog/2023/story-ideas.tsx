import Image from 'next/image';
import { useRouter } from 'next/router';
import BlogLayout from '~/components/blog/BlogLayout';
import ShareButtons from '~/components/common/Share';
import stroyImage from '../../../assets/images/story_ideas.jpg';

const Tips = () => {
  const { pathname } = useRouter();

  return (
    <>
      <BlogLayout>
        <main className="pt-8 pb-16 lg:pt-16 lg:px-5 md:px-10 px-5 lg:pb-24 bg-white dark:bg-gray-900">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <Image height={16} width={16} className="mr-4 w-16 h-16 rounded-full" src={stroyImage} alt="Jese Leos" />
                  <div>
                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jeeva B</a>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">Software Developer</p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400"><time title="February 8th, 2022">May 05, 2023</time></p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">Creative Ways to Use Instagram Stories</h1>
            </header>

            <p className="lead">
              Instagram Stories are a potent tool for connecting with followers and promoting brands for both people and companies. In this blog article, we&#39;ll look at some original methods to leverage Instagram Stories to increase reach and engagement.
              Instagram Stories allows users to share temporary photos and videos that disappear after 24 hours. And this article is to make the most out of Instagram Stories and improve engagement with your audience.
            </p>

            <figure className="text-sm font-medium my-10"><Image src={stroyImage} alt="" className='rounded-md' />
              <figcaption>Photo by <a className='underline text-blue-600' href="https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brett Jordan</a> on <a className='underline text-blue-600' href="https://unsplash.com/images/apps/instagram?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </figcaption>
            </figure>

            <>
              <div className='my-24'>
                <h2 className="text-xl font-bold my-5 text-indigo-600">1. Creative Ways to Use Instagram Stories</h2>
                <p className='mb-4'>
                  Instagram Stories is a well-liked function on the social networking site that enables users to publish transient images and videos that vanish after 24 hours. These suggestions can help you create better Instagram Stories.
                </p>

                <div className='my-16'>
                  <span className='font-bold'>Overview</span>
                  <li>Showcasing Product Demos</li>
                  <li>About your product</li>
                  <li>Promoting Events or Sales</li>
                  <li>Sharing Behind-the-Scenes Content</li>
                  <li>Q&A Sessions</li>
                </div>

                <p className='mb-4 text-start'>
                  <p className='my-5'> Instagram Stories can be a great platform for showcasing your products in action. By creating short videos that highlight your products features or benefits, you can help your followers visualize how your product can improve their lives.</p>
                  <p className='my-5'> Encourage your followers to share their own content on your Instagram Story. This is a great way to build a community around your brand and show your followers that you value their contributions.</p>
                  <p className='my-5'> Instagram Stories can be an effective tool for promoting upcoming events or sales. Use eye-catching visuals and clear calls-to-action to encourage your followers to take action.</p>
                  <p className='my-5'> Sharing behind-the-scenes content on your Instagram Story is a great way to humanize your brand and build a stronger connection with your followers. Highlight your team members or showcase your workplace to give your followers a glimpse into your brands personality.</p>
                  <p className='my-5'> Hosting Q&A sessions on your Instagram Story can be a great way to engage with your followers and answer any questions they may have about your brand or products.</p>
                </p>

                <p>
                  By using Instagram Stories creatively, you can increase engagement and reach on the platform, build stronger connections with your followers, and ultimately grow your brand.
                </p>
              </div>

              <div className='my-24'>
                <h2 className="text-xl font-bold my-5 text-indigo-600"><strong>2. Fun and Interactive Polls or Quizzes on Your Instagram Story</strong></h2>
                <p className='mb-4'>
                  Use Poll  and other interactive tools in your stories about your content, services, and your products to get feedback about your content, service or about your product. This is an great technique to gain feedback from the targeted users which helps you to enhance your brand.
                </p>

                <div className='my-16'>
                  <span className='font-bold'>Overview</span>
                  <li>Quizzes</li>
                  <li>Stickers and other Story materials</li>
                  <li>Polls</li>
                  <li>Share Results</li>
                </div>

                <p className='mb-4 text-start'>
                  <p className='my-5'> Use quizzes and polls which is related to your brand or product. This is a fun way to engage with your followers and test their knowledge about your product.</p>
                  <p className='my-5'> Use Instagrams interactive stickers to create fun and engaging stories that your followers can participate in. For example, create a “This or That” game that asks your followers to choose between two options related to your product.</p>
                  <p className='my-5'> Conduct Market Research: Use polls to conduct market research and gather insights into your target audiences preferences and habits.</p>
                  <p className='my-5'> Share the results of your polls and quizzes on your Instagram Story. This is a great way to show your followers that you value their opinions and to build transparency and trust which helps you to gain more active users.</p>
                </p>

                <p>
                  By using polls and quizzes creatively like the above mentioned ways, you can engage with your followers in a fun and interactive way, gather valuable information and build stronger connections with your audience and gain more active followers.
                </p>
              </div>

              <div className='my-24'>
                <h2 className="text-xl font-bold my-5 text-indigo-600"><strong>3. Behind-the-Scenes</strong></h2>
                <p className='mb-4'>
                  Instagram Stories is a well-liked function on the social networking site that enables users to publish transient images and videos that vanish after 24 hours. These suggestions can help you create better Instagram Stories.
                </p>

                <div className='my-16'>
                  <span className='font-bold'>Overview</span>
                  <li>Behind The Scenes</li>
                  <li>Reveal Your Team Members</li>
                </div>

                <p className='mb-4 text-start'>
                  <li className='my-5'> The great advantage of the Instagram Stories is to showcase behind-the-scenes content rather than any other source on Instagram. By providing your followers with a behind the scene videos or how to make your content, you can build the stronger connections and gain trust among your audience.</li>
                  <li className='my-5'> Share photos, videos and their funny moments on your Instagram Story. This is a great way to give your followers a glimpse into your content and to showcase the people behind the products or services.</li>
                </p>

                <p>
                  By using Instagram Stories creatively, you can increase engagement and reach on the platform, build stronger connections with your followers, and ultimately grow your brand.
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

export default Tips;