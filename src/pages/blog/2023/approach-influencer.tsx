import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import HeadSection from '~/components/seo';
import BlogLayout from '~/components/blog/BlogLayout';
import AuthorSection from '~/components/common/AuthorSection';
import { SD_ApproachInfluencer } from '~/content/structuredData';
import { SeoParams } from '~/components/seo/types';

const Image = dynamic(() => import('next/image'), { ssr: true });
const ShareButtons = dynamic(() => import('~/components/common/Share'));

const Container = ({ children }: React.PropsWithChildren) => <div className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert`'>{children}</div>;
const SubHeading = ({ children }: React.PropsWithChildren) => <div className='text-2xl font-semibold mb-4 pb-4`'>{children}</div>;
const Paragraph = ({ children }: React.PropsWithChildren) => <div className='mb-5'>{children}</div>;
const List = ({ children }: React.PropsWithChildren) => <div className='list-disc list-inside mb-5'><ul className='list-disc list-inside mb-4'>{children}</ul></div>;
const ListItem = ({ children }: React.PropsWithChildren) => <div className='mb-3 border p-4 rounded-md bg-white shadow-sm'><>{children}</></div>;

const ApproachInfluencer = () => {
  const { pathname } = useRouter();

  const seoParams: SeoParams = {
    title: 'How to Choose Instagram Influencer for Collobration',
    description: 'In this blog post, we are going to discuss how to approach Instagram Influencer in your business and build a relationship with them that benefits both parties.',
    keywords: 'instagram Influencer, influencer marketing, how to approach Influencer',
    pageUrl: pathname,
    structuredData: SD_ApproachInfluencer
  };

  return (
    <>
      <HeadSection seoParams={seoParams} />

      <BlogLayout>
        <main className='pt-8 pb-16 lg:pt-16 lg:px-5 md:px-10 px-5 lg:pb-24 bg-white dark:bg-gray-900'>
          <Container>
            <header className='mb-4 lg:mb-6 not-format'>
              <AuthorSection date={'15 May 2023'} />
              <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>How to Choose Instagram Influencer for Collobration</h1>
            </header>

            <Paragraph>
              Instagram Influencer plays a major role in marketing strategies.
              These people have the ability to reach a huge targeted people and sell your product to them.
              However, choosing the right influencer may be challenging these days, especially in case you&apos;re new to the arena of influencer advertising.
              In this article, we&apos;re going to take a look of how to choose Instagram Influencer for your business.
            </Paragraph>

            <figure className='text-sm font-medium mb-10 mt-5'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={require('~/assets/images/blog/approach.webp')} alt='Approach Instagram Influencer' className='rounded-md aspect-video object-cover' />
              <figcaption>
                Photo by <a href="https://unsplash.com/@jannerboy62?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Fewings</a> on <a href="https://unsplash.com/photos/2ykkF3oQb_c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </figcaption>
            </figure>

            <div className='lg:bg-slate-50 lg:border lg:my-10 lg:p-10 rounded-md'>
              <SubHeading>Do&apos;s and Don&apos;ts While Approaching Influencer</SubHeading>
              <List>
                <ListItem>1. Do some research and identify Influencer in your niche or industry who align with your brand .</ListItem>
                <ListItem>2. Engage with their content by liking and commenting. And show your appreciation for their work</ListItem>
                <ListItem>3. Explain why you think they would be a good fit for your business.</ListItem>
                <ListItem>4. Be transparent about your expectations and budget, and offer fair compensation in the form of cash, free products, or both.</ListItem>
                <ListItem>5. Be flexible and open to their ideas when negotiating how to promote your brand.</ListItem>
                <ListItem>6. Maintain a positive relationship with them even after the sponsored content has been posted.</ListItem>
                <ListItem>7. Avoid being too pushy or aggressive.</ListItem>
              </List>
            </div>

            <Paragraph>
              <h2 className='text-xl font-bold mb-2'>Advantages of Choosing a Good Influencer</h2>
              <ul className='list-disc list-inside mb-10'>
                <li>Increase your brand awareness between your targeted people</li>
                <li>Opportunities for better sales and return on Investment for your product or service</li>
                <li className='my-2'>Potential for long-term partnerships and collaborations</li>
                <li className='my-2'>They saves your time and money for marketing your product or service</li>
                <li className='mb-3'>Overall, Good Influencer can help you reach a large and engaged audience, improve your brand awarness, and drive sales and conversions.</li>
              </ul>

              <h2 className='text-xl font-bold mb-2'>Disadvantages of Choosing a Bad Influencer</h2>
              <ul className='list-disc list-inside mb-10'>
                <li>Poor return on investment</li>
                <li>Disengaged followers</li>
                <li className='my-2'>Risk of negative feedback or backlash from the influencer&apos;s followers</li>
                <li className='my-2'>Bad Influencer can hurt your product image and even lead to some legal issues.</li>
                <li className='my-2'>It&apos;s important to choose Influencer who align with your brand, have a genuine followers and engagement, and create quality content.</li>
              </ul>
              <span className='font-medium text-lg'>In conclusion,</span> Choosing the right influencer can make a huge difference in the success of your marketing campaign.
              Good Influencer can help you reach a large and engaged audience, improve your brand awarness, and drive sales and conversions.
              On the other hand, bad Influencer can hurt your brand reputation, waste your budget, and even lead to legal issues.
              It&apos;s important to choose Influencer who align with your brand values, have a genuine following and engagement, and create quality content.
            </Paragraph>

            <hr className='mt-10' />

            <div>
              <ShareButtons url={pathname} />
            </div>
          </Container>
        </main>
      </BlogLayout>
    </>
  );
};

export default memo(ApproachInfluencer);
