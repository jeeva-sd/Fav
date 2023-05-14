import { memo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import {AiOutlineBars,AiOutlineClose} from 'react-icons/ai';
// import {IoIosCodeDownload} from 'react-icons/io';

const pages = [
  // { name: 'Reel', href: '/reel' },
  // { name: 'Video', href: '/video' },
  // { name: 'Photo', href: '/photo' },
  // { name: 'Thumbnail', href: '/thumbnail' },
  // { name: 'Stories', href: '/story' },
  { name: 'Blog', href: '/blog' },
  { name: 'About us', href: '/legal/about-us' },
  { name: 'Contact us', href: '/legal/contact-us' },
];

const Header = () => {
  const { push } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white z-50">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 cursor-pointer" onClick={()=> push('/')}>
            <span className="sr-only">FavInsta</span>
            {/* <IoIosCodeDownload className="w-auto" fontSize={35}/> */}
            <span className='w-auto font-bold text-2xl mx-2'><span className='text-indigo-600'>Fav</span> <span>Insta</span></span>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineBars className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6  lg:justify-end">
            {pages.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-bold leading-6 antialiased text-gray-800">
                {item.name}
              </a>
            ))}
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">FavInsta</span>
                <span className="font-bold text-2xl">FavInsta</span>
                {/* <IoIosCodeDownload className="w-auto" color='red' fill='#2779a7' fontSize={35}/> */}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {pages.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 antialiased block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {/* <div className="py-6">
                  <Link
                    href={'/'}
                    className="-mx-3 block antialiased rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default memo(Header);