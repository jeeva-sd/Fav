import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import HeadSection from '~/components/seo';
import BlogLayout from '~/components/blog/BlogLayout';
import AuthorSection from '~/components/common/AuthorSection';
import { SeoParams } from '~/components/seo/types';

const Image = dynamic(() => import('next/image'), { ssr:true });
const ShareButtons = dynamic(() => import('~/components/common/Share'));

const Container = ({ children }: React.PropsWithChildren) => <div className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert`'>{children}</div>;
const SubHeading = ({ children }: React.PropsWithChildren) => <div className='text-2xl font-semibold mb-3`'>{children}</div>;
const Paragraph = ({ children }: React.PropsWithChildren) => <div className='mb-5'>{children}</div>;
const List = ({ children }: React.PropsWithChildren) => <div className='list-disc list-inside mb-5'><ul className='list-disc list-inside mb-4'>{children}</ul></div>;
const ListItem = ({ children }: React.PropsWithChildren) => <div className='mb-3 border p-4 rounded-md bg-white shadow-md'><>{children}</></div>;

const ApproachInfluencers = () => {
  const { pathname } = useRouter();

  const seoParams: SeoParams= {
    title: 'How to Approach Instagram Influencers for Your Business',
    description: 'In this blog post, we are going to discuss how to approach Instagram influencers in your business and build a relationship with them that benefits both parties.',
    keywords: 'instagram influencers, influencer marketing, how to approach influencers',
    pageUrl: pathname,
  };

  return (
    <>
      <HeadSection seoParams={seoParams}/>

      <BlogLayout>
        <main className='pt-8 pb-16 lg:pt-16 lg:px-5 md:px-10 px-5 lg:pb-24 bg-white dark:bg-gray-900'>
          <Container>
            <header className='mb-4 lg:mb-6 not-format'>
              <AuthorSection date={'15 May 2023'}/>
              <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>How to Approach Instagram Influencers for Your Business</h1>
            </header>


            <Paragraph>
                        Instagram influencers have turned out to be an critical part of many groups&apos; marketing strategies.
                        These people have the ability to reach a huge target market and sell your logo to their fans.
                        However, drawing close an influencer may be intimidating, especially in case you&apos;re new to the arena of influencer advertising.
                        In this blog post, we&apos;re going to speak a way to method Instagram influencers in your business and construct a courting with them that advantages both events.
            </Paragraph>

            <figure className='text-sm font-medium mb-10 mt-5'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={require('~/assets/images/blog/approach.webp')} alt='Approach Instagram Influencers' className='rounded-md aspect-video object-cover' />
              <figcaption>
                Photo by <a href="https://unsplash.com/@jannerboy62?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Fewings</a> on <a href="https://unsplash.com/photos/2ykkF3oQb_c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </figcaption>
            </figure>

            <div className='lg:bg-slate-50 lg:border lg:my-10 lg:p-10 rounded-md'>
              <SubHeading>Do&apos;s and Don&apos;ts While Approaching Influencers</SubHeading>
              <List>
                <ListItem>1. Do your research and identify influencers in your niche or industry who align with your brand&apos;s values and aesthetics.</ListItem>
                <ListItem>2. Engage with their content by liking, commenting, sharing, and tagging them on your own posts.</ListItem>
                <ListItem>3. Be professional and respectful when reaching out to influencers, and explain why you think they would be a good fit for your business.</ListItem>
                <ListItem>4. Be transparent about your expectations and budget, and offer fair compensation in the form of cash, free products, or both.</ListItem>
                <ListItem>5. Be flexible and open to their ideas when negotiating, and trust their instincts on how to promote your brand.</ListItem>
                <ListItem>6. Maintain a positive relationship with the influencer even after the sponsored content has been posted, and show your appreciation for their work.</ListItem>
                <ListItem>7. Avoid being too pushy or aggressive, and don&apos;t expect influencers to work for free or without proper compensation.</ListItem>
              </List>
            </div>

            <Paragraph>
              <h2 className='text-xl font-bold mb-2'>Advantages of Choosing a Good Influencer</h2>
              <ul className='list-disc list-inside mb-10'>
                <li>Increased brand awareness and credibility</li>
                <li>Opportunities for product or service sales</li>
                <li className='my-2'>Potential for long-term partnerships and collaborations</li>
                <li className='my-2'>Authentic and relatable content that resonates with the influencer&apos;s followers</li>
                <li className='mb-3'>Good influencers can help you reach a large and engaged audience, improve your brand credibility, and drive sales and conversions.</li>
              </ul>

              <h2 className='text-xl font-bold mb-2'>Disadvantages of Choosing a Bad Influencer</h2>
              <ul className='list-disc list-inside mb-10'>
                <li>Poor return on investment</li>
                <li>Authenticity concerns and disengaged followers</li>
                <li className='my-2'>Risk of negative feedback or backlash from the influencer&apos;s followers</li>
                <li className='my-2'>Bad influencers can hurt your brand reputation and even lead to legal issues.</li>
                <li className='my-2'>It&apos;s important to choose influencers who align with your brand values, have a genuine following and engagement, and create high-quality and authentic content.</li>
              </ul>
              <span className='font-medium text-lg'>In conclusion,</span> Choosing the right influencer can make a huge difference in the success of your marketing campaign.
                        Good influencers can help you reach a large and engaged audience, improve your brand credibility, and drive sales and conversions.
                        On the other hand, bad influencers can hurt your brand reputation, waste your budget, and even lead to legal issues.
                        It&apos;s important to choose influencers who align with your brand values, have a genuine following and engagement, and create high-quality and authentic content.
            </Paragraph>

            <hr className='mt-10'/>

            <div>
              <ShareButtons url={pathname} />
            </div>
          </Container>
        </main>
      </BlogLayout>
    </>
  );
};

export default memo(ApproachInfluencers);
