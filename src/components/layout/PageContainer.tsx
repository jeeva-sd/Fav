import Image from 'next/image';
import beam from '../../assets/images/breams/beams.jpg';
import Dgrid from '../../assets/images/breams/3dgrid.png';

const PageContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='py-28 lg:px-10 md:px-10 px-2 bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen'>
      <div className='flex flex-wrap justify-center gap-5'>
        <Image src={beam} alt='' className='fixed top-40 left-2/4 -translate-x-2/3 -translate-y-1/2 max-w-none' />
        <Image src={Dgrid} alt='' className='fixed w-full -translate-y-44 h-full opacity-5' />
        <div className='relative lg:w-7/12 md:w-10/12 w-full lg:p-16 p-5 bg-white rounded shadow-xl shadow-slate-700/20 ring-1 ring-gray-900/5'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;