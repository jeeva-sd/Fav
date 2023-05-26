import Image from 'next/image';
import authProfile from '~/assets/images/blackNinjaProfile.jpg';

const AuthorSection = ({date}: any) => {
  return (
    <address className='flex items-center mb-6 not-italic border rounded-md pb-3 bg-slate-50 p-5 shadow-inner'>
      <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
        <Image height={100} width={100} className='mr-4 w-16 h-16 rounded-full' src={authProfile} alt='author_profile' />
        <div>
          <span className='text-xl font-bold text-gray-900 dark:text-white'>Black Ninja</span>
          <p className='text-base font-light text-gray-500 dark:text-gray-400'>Digital Maverick</p>
          <p className='text-base font-light text-gray-500 dark:text-gray-400'><time title='February 8th, 2022'>{date ? date : '05 May 2023'}</time></p>
        </div>
      </div>
    </address>
  );
};

export default AuthorSection;