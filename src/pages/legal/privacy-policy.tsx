import React from 'react';
import PageContainer from '~/components/layout/PageContainer';

const PrivacyPolicy: React.FC = () => {
  return (
    <PageContainer>
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl leading-9 font-extrabold text-gray-900">
          Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-7 text-gray-500">
          At FavInsta.com, we prioritize the privacy and security of our visitors. We want to assure you that we do not collect any personal data or personally identifiable information when you visit our website.
          </p>

          <h2 className="text-2xl leading-8 font-bold text-gray-900 mt-8">
          Data Collection and Usage
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-500">
          We do not collect any personal information from our visitors, such as names, email addresses, or any other data that can identify you individually.
          </p>

          <h2 className="text-2xl leading-8 font-bold text-gray-900 mt-8">
          Log Files and Analytics
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-500">
          Like many other websites, our server automatically collects certain non-personal information when you visit our website, such as your IP address, browser type, referring website, and the date and time of your visit. This information is used for statistical purposes and helps us analyze trends and improve our website, but it does not identify you personally.
          </p>

          <h2 className="text-2xl leading-8 font-bold text-gray-900 mt-8">
          External Links
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-500">
          Our website may contain links to external sites for your convenience. However, we have no control over these websites and their privacy practices. We encourage you to review the privacy policies of any external sites that you visit.
          </p>

          <h2 className="text-2xl leading-8 font-bold text-gray-900 mt-8">
          Changes to This Privacy Policy
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-500">
          We reserve the right to make changes to this Privacy Policy. Any updates or modifications will be posted on this page with a revised &quot;last updated&quot; date. We recommend checking this page periodically to stay informed about our privacy practices.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default PrivacyPolicy;
