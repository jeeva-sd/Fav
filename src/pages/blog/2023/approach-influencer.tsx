import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BlogLayout from '~/components/blog/BlogLayout';
import tips from '../../../assets/images/instagram_tips.jpg';
import ShareButtons from '~/components/common/Share';

const Container = ({ children }: React.PropsWithChildren) => <div className='
mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert
`'>{children}</div>;

const SubHeading = ({ children }: React.PropsWithChildren) => <div className=' text-2xl
font-semibold
mb-3
`'>{children}</div>;

const List = ({ children }: React.PropsWithChildren) => <div className='
list-disc
list-inside
mb-5
'><ul className="list-disc list-inside mb-4">{children}</ul></div>;

const ListItem = ({ children }: React.PropsWithChildren) => <div className='
mb-3 border p-4 rounded-md bg-white shadow-md
'><>{children}</></div>;

const Paragraph = ({ children }: React.PropsWithChildren) => <div className='
mb-5
'>{children}</div>;

const ApproachInfluencers = () => {
  const { pathname } = useRouter();

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
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">How to Approach Instagram Influencers for Your Business</h1>
          </header>
          <Paragraph>
                        Instagram influencers have turned out to be an critical part of many groups&apos; marketing strategies.
                        These people have the ability to reach a huge target market and sell your logo to their fans.
                        However, drawing close an influencer may be intimidating, especially in case you&apos;re new to the arena of influencer advertising.
                        In this blog post, we&apos;re going to speak a way to method Instagram influencers in your business and construct a courting with them that advantages both events.
          </Paragraph>

          <div className='bg-slate-100 p-10 rounded-md my-10'>
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
            <h3 className="text-xl font-bold mb-2">Advantages of Choosing a Good Influencer</h3>
            <ul className="list-disc list-inside mb-10">
              <li>Increased brand awareness and credibility</li>
              <li>Opportunities for product or service sales</li>
              <li>Potential for long-term partnerships and collaborations</li>
              <li>Authentic and relatable content that resonates with the influencer&apos;s followers</li>
              <li className='mb-3'>Good influencers can help you reach a large and engaged audience, improve your brand credibility, and drive sales and conversions.</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">Disadvantages of Choosing a Bad Influencer</h3>
            <ul className="list-disc list-inside mb-10">
              <li>Poor return on investment</li>
              <li>Authenticity concerns and disengaged followers</li>
              <li>Risk of negative feedback or backlash from the influencer&apos;s followers</li>
              <li>Bad influencers can hurt your brand reputation and even lead to legal issues.</li>
              <li className='mb-3'>It&apos;s important to choose influencers who align with your brand values, have a genuine following and engagement, and create high-quality and authentic content.</li>
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
  );
};

export default ApproachInfluencers;
