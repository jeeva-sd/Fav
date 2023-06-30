import { useRouter } from 'next/router';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiFillHome, AiOutlineClose } from 'react-icons/ai';
import { MdPrivacyTip } from 'react-icons/md';
import { BiCookie } from 'react-icons/bi';
import { FaNewspaper, FaBloggerB } from 'react-icons/fa';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';

export default function SideBar({ isOpen, setIsOpen }: any) {
  const { route, push } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(isOpen), [isOpen]);

  const navs = useMemo(() => {
    return [
      { title: 'Home', selected: false, icon: <AiFillHome />, path: '/' },
      { title: 'Blog', selected: false, icon: <FaBloggerB />, path: '/blog' },
      { title: 'About Us', selected: false, icon: <BsFillPersonFill />, path: '/legal/about-us' },
      { title: 'Contact Us', selected: false, icon: <BsFillTelephoneFill />, path: '/legal/contact-us' },
      { title: 'Terms and Conditions', selected: false, icon: <FaNewspaper />, path: '/legal/terms-of-service' },
      { title: 'Privacy Policy', selected: false, icon: <MdPrivacyTip />, path: '/legal/privacy-policy' },
      { title: 'Cookie Policy', selected: false, icon: <BiCookie />, path: '/legal/cookie-policy' },
    ];
  }, []);

  const sideBarNavs = useMemo(() => {
    return navs.map(nav => {
      if (route === nav.path) {
        return { ...nav, selected: true };
      }

      return nav;
    });
  }, [route, navs]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-[100]' onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                    <div className='px-4 sm:px-6 flex justify-between border-b pb-5'>
                      <Dialog.Title className='text-lg font-bold'>HighTool</Dialog.Title>
                      <Dialog.Title className='text-lg font-medium text-gray-900 cursor-pointer'
                        onClick={() => {
                          setOpen(false);
                          setIsOpen(false);
                        }}>
                        <AiOutlineClose />
                      </Dialog.Title>
                    </div>

                    <div className='lg:hidden' id='mobile-menu'>
                      <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
                        {sideBarNavs.map((nav, index) => {
                          return <div
                            key={index}
                            onClick={() => {
                              push(nav.path);
                              setOpen(false);
                              setIsOpen(false);
                            }}
                            className={`${nav.selected ? 'bg-indigo-600 text-white' : 'text-gray-600'} ${(index === 2 || index === 4) && 'border-t rounded-none hover:rounded-md'}  hover:text-indigo-600 hover:bg-slate-100 px-3 py-2 rounded-md text-base font-medium cursor-pointer flex items-center`}
                          >
                            <span className='mx-1'>{nav.icon}</span>
                            <span className='mx-1'>{nav.title}</span>
                          </div>;
                        })}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}