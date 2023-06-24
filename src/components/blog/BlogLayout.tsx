import Image from 'next/image';
import Fillups from './Fillups';
import BreadCrumbs from '~/widgets/BreadCrumbs';
import beam from '~/assets/images/breams/beams.jpg';
import Dgrid from '~/assets/images/breams/3dgrid.png';

const BlogLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='py-28 lg:px-10 md:px-10 px-2 min-h-screen'>
      <div className='flex flex-wrap justify-center gap'>
        <Image src={beam} alt='' className='fixed top-40 left-2/4 -translate-x-2/3 -translate-y-1/2 max-w-none w-[150vw]' priority={true} width={1920} height={1080} loading='eager' />
        <Image src={Dgrid} alt='' className='fixed w-full -translate-y-24 h-screen opacity-5' priority={true} width={1920} height={1080} loading='eager' />

        <div className='relative lg:w-6/12 md:w-10/12 w-full bg-white rounded shadow-xl shadow-slate-700/20 ring-1 ring-gray-900/5'>
          <div className='mx-auto flex lg:justify-start md:justify-center justify-start lg:px-6 md:px-6 px-6 mt-14 w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
            <BreadCrumbs />
          </div>

          {children}

          <Fillups />
        </div>

        {/* <div className='relative lg:w-6/12 md:w-4/12 w-full'>
          <Fillups />
        </div> */}
      </div>
    </div>
  );
};

export default BlogLayout;