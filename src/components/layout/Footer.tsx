import { useRouter } from 'next/router';

const Footer = () => {
  const { push } = useRouter();

  return (
    <footer className='relative bottom-0 h-40 w-full bg-gradient-to-r from-slate-100 via-white to-slate-100 border-t flex items-center'>
      <div className='absolute inset-x-0  h-full flex flex-wrap justify-center items-center mt-2'>
        <div className='text-center lg:w-6/12 w-full flex justify-center items-center flex-wrap'>
          <div className='font-semibold w-full tracking-wide'>FavInsta</div>
          <div className='text-gray-600 w-full text-[15px] my-2'>© 2023 FavInsta.com. All rights reserved.</div>

          <div className='flex justify-center items-center gap-5 lg:w-auto md:w-full w-full flex-wrap'>
            <div
              className='cursor-pointer text-[15px] text-gray-600 hover:text-indigo-600 select-none'
              onClick={() => push({ pathname: '/legal/privacy-policy' })}
            >
              Privacy
            </div>

            <div className='font-thin opacity-50'> | </div>

            <div
              className=' cursor-pointer text-[15px] text-gray-600  hover:text-indigo-600 select-none'
              onClick={() => push({ pathname: '/legal/terms-of-service' })}
            >
              Terms
            </div>

            <div className='font-thin opacity-50'> | </div>


            <div
              className=' cursor-pointer text-[15px] text-gray-600  hover:text-indigo-600 select-none'
              onClick={() => push({ pathname: '/legal/cookie-policy' })}
            >
              Cookies
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;