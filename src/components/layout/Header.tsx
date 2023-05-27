import { memo, useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineBars } from 'react-icons/ai';
import SideBar from './SideBar';
// import {IoIosCodeDownload} from 'react-icons/io';

const pages = [
  // { name: 'Reel', href: '/reel' },
  // { name: 'Video', href: '/video' },
  // { name: 'Photo', href: '/photo' },
  // { name: 'Thumbnail', href: '/thumbnail' },
  // { name: 'Stories', href: '/story' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/legal/about-us' },
  { name: 'Contact', href: '/legal/contact-us' },
];

const Header = () => {
  const { push } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-white z-50'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1 cursor-pointer' onClick={()=> push('/')}>
            <span className='sr-only'>FavInsta</span>
            {/* <IoIosCodeDownload className='w-auto' fontSize={35}/> */}
            <span className='w-auto font-bold text-2xl mx-2'><span className='text-indigo-600'>Fav</span> <span>Insta</span></span>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <AiOutlineBars className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-6  lg:justify-end'>
            {pages.map((item) => (
              <a key={item.name} href={item.href} className='no-underline text-xs font-bold leading-6 antialiased text-gray-800 uppercase hover:text-indigo-600 tracking-wide'>
                {item.name}
              </a>
            ))}
          </div>
          {/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div> */}
        </nav>

        <SideBar isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen}/>
      </header>
    </div>
  );
};

export default memo(Header);