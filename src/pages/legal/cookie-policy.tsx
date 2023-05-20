import React, { memo } from 'react';
import PageContainer from '~/components/layout/PageContainer';

const CookiePolicy: React.FC = () => {
  return (
    <PageContainer>
      <div className='bg-white py-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-3xl leading-9 font-extrabold text-gray-900'>
          Cookie Policy
          </h1>
          <p className='mt-6 text-lg leading-7 text-gray-500'>
          FavInsta.com does not use any cookies to collect or store information about our visitors. We respect your privacy and do not track your online activities through cookies or similar technologies.
          </p>

          <h2 className='text-2xl leading-8 font-bold text-gray-900 mt-8'>
          Third-Party Services
          </h2>
          <p className='mt-4 text-lg leading-7 text-gray-500'>
          While we do not use cookies ourselves, please note that third-party services, such as social media platforms or embedded content from other websites, may use cookies to enhance your browsing experience. These cookies are governed by the respective privacy policies of the third-party services and are not controlled by FavInsta.com.
          </p>

          <h2 className='text-2xl leading-8 font-bold text-gray-900 mt-8'>
          Managing Cookies
          </h2>
          <p className='mt-4 text-lg leading-7 text-gray-500'>
          If you wish to manage or disable cookies, you can do so through your browser settings. Please refer to the documentation or support pages of your specific browser for instructions on how to control cookies. Keep in mind that disabling cookies may impact your experience while using certain websites.
          </p>

          <h2 className='text-2xl leading-8 font-bold text-gray-900 mt-8'>
          Changes to This Cookie Policy
          </h2>
          <p className='mt-4 text-lg leading-7 text-gray-500'>
          We reserve the right to make changes to this Cookie Policy. Any updates or modifications will be posted on this page with a revised &quot;last updated&quot; date. We recommend checking this page periodically to stay informed about our cookie practices.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default memo(CookiePolicy);
