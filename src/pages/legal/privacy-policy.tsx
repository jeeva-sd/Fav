import React, { memo } from 'react';
import { useRouter } from 'next/router';
import Headsection from '~/components/seo/Headsection';
import PageContainer from '~/components/layout/PageContainer';
import { SeoParams } from '~/components/seo/types';

const PrivacyPolicy: React.FC = () => {
  const { pathname, push } = useRouter();

  const seoParams: SeoParams = {
    title: 'Privacy Policy | FavInsta.com',
    description: 'Privacy Policy, favinsta, favinsta.com, Privacy Policy, increase followers on Instagram, instagram tips, instagram profile picture, instagram reel',
    keywords: 'Privacy Policy, favinsta, favinsta.com, Privacy Policy, increase followers on Instagram, instagram profile picture, instagram reels',
    pageUrl: pathname,
  };

  return (
    <>
      <Headsection seoParams={seoParams} />

      <PageContainer>
        <div className='bg-white px-4 sm:px-6 lg:px-8'>
          <div className='container mx-auto py-8'>
            <h1 className='text-4xl font-bold mb-4'>Privacy Policy</h1>
            <p className='mb-4'>Effective Date: 05 May 2023</p>

            <h2 className='text-2xl font-bold mb-2'>Introduction</h2>
            <p className='mb-4'>
              Welcome to Favinsta.com! At Favinsta.com, we value and prioritize your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal information when you visit our website. By accessing or using Favinsta.com, you acknowledge and accept the practices described in this policy.
            </p>

            <h2 className='text-2xl font-bold mb-2'>1. Information We Collect</h2>
            <p className='mb-4'>We collect various types of information from you when you interact with our website, including:</p>

            <h3 className='text-xl font-bold mb-2'>1.1 Personal Information</h3>
            <p className='mb-4'>When you subscribe to our services, we collect your email address for subscription purposes.</p>

            <h3 className='text-xl font-bold mb-2'>1.2 Non-Personal Information</h3>
            <p className='mb-4'>We may also collect non-personal information automatically, such as your IP address, browser type, device information, and website usage data, through the use of cookies and similar tracking technologies.</p>

            <h2 className='text-2xl font-bold mb-2'>2. Use of Information</h2>
            <p className='mb-4'>We use the collected information for the following purposes:</p>

            <h3 className='text-xl font-bold mb-2'>2.1 Subscription Benefits</h3>
            <p className='mb-4'>We use your email address to provide you with subscription-related benefits, such as sending newsletters, updates, and promotional offers.</p>

            <h3 className='text-xl font-bold mb-2'>2.2 Communication and Updates</h3>
            <p className='mb-4'>We may use your email address to communicate with you regarding your subscription, respond to your inquiries, and provide important updates about Favinsta.com.</p>

            <h2 className='text-2xl font-bold mb-2'>3. Sharing of Information</h2>
            <p className='mb-4'>We understand the importance of keeping your personal information confidential. We may share your information in the following circumstances:</p>

            <h3 className='text-xl font-bold mb-2'>3.1 Authorized Service Providers</h3>
            <p className='mb-4'>We may engage trusted third-party service providers to assist us in delivering our services. These providers have limited access to your personal information and are bound by confidentiality obligations.</p>

            <h3 className='text-xl font-bold mb-2'>3.2 Legal Requirements</h3>
            <p className='mb-4'>We may disclose your information if required to do so by law or if we believe in good faith that such disclosure is necessary to:</p>
            <ul className='list-disc pl-6 mb-4'>
              <li>Comply with a legal obligation</li>
              <li>Protect and defend our rights or property</li>
              <li>Prevent or investigate possible wrongdoing</li>
              <li>Ensure the safety of our users or the public</li>
            </ul>

            <h2 className='text-2xl font-bold mb-2'>4. Cookies and Tracking Technologies</h2>
            <p className='mb-4'>We use cookies and similar tracking technologies to enhance your browsing experience and gather non-personal information about your interactions with Favinsta.com. Here are some key points about our use of cookies:</p>

            <h3 className='text-xl font-bold mb-2'>4.1 Types of Cookies Used</h3>
            <p className='mb-4'>We use both session cookies (which are erased when you close your browser) and persistent cookies (which remain on your device for a set period of time) to improve your user experience and provide personalized features.</p>

            <h3 className='text-xl font-bold mb-2'>4.2 Cookie Management and Opt-Out Options</h3>
            <p className='mb-4'>Most web browsers allow you to manage your cookie preferences. You can usually modify your browser settings to refuse cookies or alert you when cookies are being sent. However, please note that disabling cookies may affect the functionality of Favinsta.com.</p>

            <h3 className='text-xl font-bold mb-2'>4.3 Tracking Technologies</h3>
            <p className='mb-4'>In addition to cookies, we may also use web beacons and log files to collect non-personal information about your interactions with our website and track usage patterns.</p>

            <h3 className='text-xl font-bold mb-2'>4.4 Cookie and Tracking Data Usage</h3>
            <p className='mb-4'>We use cookies and tracking technologies for various purposes, including:</p>
            <ul className='list-disc pl-6 mb-4'>
              <li>Analyzing website usage and improving our services</li>
              <li>Personalizing your experience on Favinsta.com</li>
              <li>Providing targeted advertisements</li>
              <li>Monitoring and preventing fraudulent activities</li>
            </ul>

            <h2 className='text-2xl font-bold mb-2'>5. Data Security Measures</h2>
            <p className='mb-4'>We take reasonable steps to ensure the security of your personal information. We implement appropriate technical and organizational measures to protect against unauthorized access, alteration, disclosure, or destruction of your data.</p>

            <h2 className='text-2xl font-bold mb-2'>6. Your Rights and Control</h2>
            <p className='mb-4'>We respect your rights and provide you with options to exercise control over your personal information:</p>

            <h3 className='text-xl font-bold mb-2'>6.1 Access and Correction</h3>
            <p className='mb-4'>You have the right to access and correct any personal information we hold about you. You can update your email address by logging into your account or contacting us directly.</p>

            <h3 className='text-xl font-bold mb-2'>6.2 Opting Out and Unsubscribing</h3>
            <p className='mb-4'>If you no longer wish to receive emails from us, you can unsubscribe by clicking the &apos;unsubscribe&apos; link provided in our emails or by contacting us directly.</p>

            <h3 className='text-xl font-bold mb-2'>6.3 Data Portability</h3>
            <p className='mb-4'>You have the right to request a copy of your personal information in a commonly used, machine-readable format.</p>

            <h3 className='text-xl font-bold mb-2'>6.4 Deleting and Removing Data</h3>
            <p className='mb-4'>If you want us to delete your personal information from our records, please contact us. We will make reasonable efforts to fulfill your request, subject to any legal obligations or legitimate business interests.</p>

            <h2 className='text-2xl font-bold mb-2'>7. Children&apos;s Privacy</h2>
            <p className='mb-4'>Favinsta.com is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children without parental consent. If you believe we have inadvertently collected information from a child, please contact us, and we will promptly delete it.</p>

            <h2 className='text-2xl font-bold mb-2'>8. International Data Transfers</h2>
            <p className='mb-4'>As an international website, your information may be transferred to and processed in countries other than your own. We will take appropriate measures to ensure the protection of your information, including utilizing standard contractual clauses or other legal mechanisms.</p>

            <h2 className='text-2xl font-bold mb-2'>9. Updates to the Privacy Policy</h2>
            <p className='mb-4'>We may update this Privacy Policy from time to time. We encourage you to review this policy periodically for any changes. By continuing to use Favinsta.com after the changes come into effect, you agree to the revised Privacy Policy.</p>

            <h2 className='text-2xl font-bold mb-2'>10. Contact Information</h2>
            <p className='mb-4'>If you have any questions or concerns about this Privacy Policy or our privacy practices, please <span onClick={() => push('/legal/contact-us')} className='text-indigo-600 underline cursor-pointer'>contact here</span>.</p>

            <h2 className='text-2xl font-bold mb-2'>Summary</h2>
            <p className='mb-4'>In summary, our Privacy Policy outlines how we collect, use, share, and protect your personal information. We collect your email address for subscription purposes and use it to provide subscription benefits and communicate with you. We may share your information with authorized service providers and disclose it as required by law. We use cookies and tracking technologies to enhance your browsing experience. We implement security measures to protect your data and respect your rights to access, correct, and delete your information. We do not knowingly collect personal information from children without parental consent. By using Favinsta.com, you consent to the practices described in this Privacy Policy.</p>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default memo(PrivacyPolicy);
