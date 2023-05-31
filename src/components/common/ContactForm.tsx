import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { contactRequest } from '~/state/duck/instagram';
import { AppState, dispatch } from '~/state/store';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { sent, sending, submitted, error } = useSelector((state: AppState) => state.instagram.contact);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(contactRequest({ name, email, message }));
  };

  useEffect(() => {
    if (sent) {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitSuccess(true);
    }

    if (error) setSubmitError('An error occurred while sending the message. Please try again later.');
  }, [sent, sending, submitted, error]);

  return (
    <form onSubmit={handleSubmit} className='w-full py-10 lg:bg-slate-100 md:bg-slate-100 lg:px-10 px-2 rounded-md mt-10'>
      <div className='mb-4'>
        <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
          Name
        </label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='w-full px-3 shadow py-2 border rounded-lg outline-none focus:ring-indigo-600 focus:border-indigo-600'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
          Email
        </label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='w-full shadow px-3 py-2 border rounded-lg outline-none focus:ring-indigo-600 focus:border-indigo-600'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
          Message
        </label>
        <textarea
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className='w-full shadow px-3 py-2 border rounded-lg outline-none focus:ring-indigo-600 focus:border-indigo-600'
        ></textarea>
      </div>
      {submitSuccess && (
        <p className='text-green-500 mb-4'>Message sent successfully!</p>
      )}
      {submitError && (
        <p className='text-red-500 mb-4'>{submitError}</p>
      )}
      <div className='w-full'>
        <button
          type='submit'
          disabled={sending}
          className='px-4 py-2 w-full bg-indigo-600 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
          {sending ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;