import React from 'react';
import ContactForm from '~/components/common/ContactForm';
import PageContainer from '~/components/layout/PageContainer';

const ContactUs: React.FC = () => {
  return (
    <PageContainer>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl leading-9 font-extrabold text-gray-900">
          Contact Us
          </h1>
          <div className="mt-6 border-t border-gray-200 pt-8">
            <h2 className="text-2xl leading-8 font-bold text-gray-900">
            Get in Touch
            </h2>
            <p className="mt-2 text-lg leading-7 text-gray-500">
            We would love to hear from you! If you have any inquiries, suggestions, or questions, feel free to reach out to us using the contact information provided below.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-8">
            <h2 className="text-2xl leading-8 font-bold text-gray-900">
            Contact Information
            </h2>
            <p className="mt-2 text-lg leading-7 text-gray-500">
            You can contact us through any of the following channels:
            </p>
            <ul className="mt-2 text-lg leading-7 text-gray-500 list-disc list-inside">
              <li>Email: styls360@gmail.com</li>
            </ul>
          </div>

          <div className="mt-6 border-t  border-gray-200 pt-8">
            <h2 className="text-2xl leading-8 font-bold text-gray-900">
            Send us a Message
            </h2>
            <p className="mt-2 text-lg leading-7 text-gray-500">
            If you prefer to reach out to us online, you can fill out the contact form below, and we will get back to you as soon as possible.
            </p>
            <ContactForm />
            {/* Add your contact form component here */}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactUs;
