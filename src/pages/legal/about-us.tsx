import React, { memo } from 'react';
import { useRouter } from 'next/router';
import PageContainer from '~/components/layout/PageContainer';
import Headsection from '~/components/seo/Headsection';
import { SeoParams } from '~/components/seo/types';

const AboutUs: React.FC = () => {
  const { pathname } = useRouter();

  const seoParams: SeoParams = {
    title: 'About Us - Valuable Insights, Expert Advice, and Practical Tips | FavInsta.com',
    description: 'about us, favinsta, favinsta.com, about fav insta, about favinsta, instagram hashtag generator',
    keywords: 'about us, favinsta, favinsta.com, about fav insta, about favinsta, instagram hashtag generator',
    pageUrl: pathname,
  };

  return (
    <>
      <Headsection seoParams={seoParams} />

      <PageContainer>
        <div className='bg-white py-8 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl leading-9 font-extrabold text-gray-900'>
              About Us
            </h1>
            <div className='mt-6 border-t border-gray-200 pt-8'>
              <h2 className='text-2xl leading-8 font-bold text-gray-900'>
                Our Mission
              </h2>
              <p className='mt-2 text-lg leading-7 text-gray-500'>
                Our goal at FavInsta.com is to give you valuable information and useful guidance so you may succeed on Instagram. We are committed to provide you with the information and methods required to be successful in creating your brand, expanding your fan base, getting more followers, likes and fulfilling your objectives on Instagram.
              </p>
            </div>

            <div className='mt-6 border-t border-gray-200 pt-8'>
              <h2 className='text-2xl leading-8 font-bold text-gray-900'>
                Our Expert Team
              </h2>
              <p className='mt-2 text-lg leading-7 text-gray-500'>
                  Behind FavInsta.com, we have a team of experienced social media enthusiasts and digital marketing experts. Our team members have a deep understanding of Instagram&apos;s algorithms, trends, and best practices. They stay up to date with the latest updates, so that the information we provide is very helpful to grow your Instagram page.
              </p>
            </div>

            <div className='mt-6 border-t border-gray-200 pt-8'>
              <h2 className='text-2xl leading-8 font-bold text-gray-900'>
                What We Offer
              </h2>
              <ul className='mt-2 text-lg leading-7 text-gray-500 list-disc list-inside'>
                <li>Comprehensive Guides: We offer comprehensive guides that cover a wide range of Instagram-related topics. Our guidelines offer step-by-step instructions and practical advice to help you reach your objectives, whether you&apos;re a novice trying to establish your Instagram profile or an established user seeking advanced methods.</li>
                <li>Latest News and Updates: Stay up to datewith the latest updates and features on Instagram. Our blog keeps you up-to-date with the ever-changing landscape of the platform, ensuring that you are always ahead of the curve and able to leverage new opportunities.</li>
                <li>Expert Insights: Gain valuable insights from our team of experts who share their knowledge and expertise on Instagram marketing. From understanding Instagram&apos;s algorithms to deciphering engagement strategies, our articles offer deep insights to help you make informed decisions and drive results.</li>
              </ul>
            </div>

            <div className='mt-6 border-t border-gray-200 pt-8'>
              <h2 className='text-2xl leading-8 font-bold text-gray-900'>
                Our Commitment to Quality
              </h2>
              <p className='mt-2 text-lg leading-7 text-gray-500'>
                We are committed to delivering high-quality, well-researched, and reliable content. Our blog posts undergo a thorough review process to ensure accuracy, relevance, and usefulness. We strive to provide you with valuable information that you can trust and apply to your Instagram journey.
              </p>
            </div>

            <div className='mt-6 border-t border-gray-200 pt-8'>
              <h2 className='text-2xl leading-8 font-bold text-gray-900'>
                Join Our Community
              </h2>
              <p className='mt-2 text-lg leading-7 text-gray-500'>
                We believe in the power of community and encourage you to join ours. Connect with like-minded individuals, share your experiences, and learn from each other. Engage with us through comments, social media, and our newsletter to stay connected and be part of a supportive community of Instagram enthusiasts.
              </p>
            </div>

            <div className='mt-6 border-t border-gray-200 pt-8'>
              <h2 className='text-2xl leading-8 font-bold text-gray-900'>
                Contact Us
              </h2>
              <p className='mt-2 text-lg leading-7 text-gray-500'>
                We value your feedback, suggestions, and questions. If you have any inquiries or would like to get in touch, please don&apos;t hesitate to reach out to us. Our dedicated team is here to assist you and provide the support you need on your Instagram journey.
              </p>
            </div>

            <div className='mt-6 border-t border-gray-200 pt-8'>
              <h2 className='text-2xl leading-8 font-bold text-gray-900'>
                Our Commitment to Quality
              </h2>
              <p className='mt-2 text-lg leading-7 text-gray-500'>
                We are committed to delivering high-quality, well-researched, and reliable content. Our blog posts undergo a thorough review process to ensure accuracy, relevance, and usefulness. We strive to provide you with valuable information that you can trust and apply to your Instagram journey.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default memo(AboutUs);