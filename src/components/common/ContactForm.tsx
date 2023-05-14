import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmitError('An error occurred while sending the message. Please try again later.');
      }
    } catch (error) {
      setSubmitError('An error occurred while sending the message. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full py-10 bg-gradient-to-t from-bg-slate-50 from-bg-slate-100 px-10 rounded-md mt-10">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 shadow py-2 border rounded-lg outline-none focus:ring-indigo-600 focus:border-indigo-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full shadow px-3 py-2 border rounded-lg outline-none focus:ring-indigo-600 focus:border-indigo-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full shadow px-3 py-2 border rounded-lg outline-none focus:ring-indigo-600 focus:border-indigo-600"
        ></textarea>
      </div>
      {submitSuccess && (
        <p className="text-green-500 mb-4">Message sent successfully!</p>
      )}
      {submitError && (
        <p className="text-red-500 mb-4">{submitError}</p>
      )}
      <div className='w-full'>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 w-full bg-indigo-600 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;