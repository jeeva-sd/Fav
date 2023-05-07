import Image from 'next/image';
import BreadCrumbs from '~/widgets/BreadCrumbs';
import beam from '../../assets/images/breams/beams.jpg';
// import grid from '../../assets/images/breams/grid-01.png';
import Dgrid from '../../assets/images/breams/3dgrid.png';

const BlogLayout = ({ children }: React.PropsWithChildren) => {
  // [mask-image:linear-gradient(92deg,white,rgba(255,255,255,0))]
  return (
    <div className='py-28 lg:px-10 md:px-10 px-2 bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen'>
      <div className="flex flex-wrap justify-center gap-5">
        <Image src={beam} alt="" className="fixed top-40 left-2/4 -translate-x-2/3 -translate-y-1/2 max-w-none" />
        {/* <Image src={beam} alt="" className="fixed top-2 left-2/4 max-w-none" /> */}
        {/* <Image src={grid} alt="" className="fixed [mask-image:linear-gradient(10deg,white,rgba(255,255,255,0))] -translate-x-1 -translate-y-28 w-[1000px] h-full opacity-5" /> */}
        {/* <Image src={grid} alt="" className="fixed [mask-image:linear-gradient(130deg,white,rgba(255,255,255,0))] -translate-x-96 -translate-y-28 w-[1000px] h-full opacity-5" /> */}

        {/* <Image src={grid} alt="" className="fixed -translate-x-2/4 -translate-y-28 w-[1000px] h-full opacity-5" />
        <Image src={grid} alt="" className="fixed translate-x-2/4 -translate-y-28 w-[1000px] h-full opacity-5" /> */}
        <Image src={Dgrid} alt="" className="fixed w-full -translate-y-44 h-full opacity-5" />
        <div className="relative lg:w-7/12 md:w-7/12 w-full p-2 bg-white rounded shadow-xl shadow-slate-700/20 ring-1 ring-gray-900/5">
          <div className='mx-auto flex lg:justify-start md:justify-center justify-start lg:px-6 md:px-6 px-6 mt-14 w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
            <BreadCrumbs />
          </div>

          {children}
        </div>
        {/* <div className="lg:w-4/12 md:w-4/12 w-full p-2">
          <BlogSideBar />
        </div> */}
      </div>
    </div>
  );
};

export default BlogLayout;