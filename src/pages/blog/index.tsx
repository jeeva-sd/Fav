import Image from 'next/image';
import { useRouter } from 'next/router';
import { blogRoutes } from '~/components/blog/blogRoutes';

const BlogIndex = () => {
  const router = useRouter();

  return (
    <div className='py-28 lg:px-10 md:px-10 px-2 flex justify-center bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen'>
      <div className='lg:w-6/12 md:w-8/12 w-full'>
        {blogRoutes.map((page:any, index: number) => {
          return (
            <div
              key={index}
              onClick={() => router.push(page.path)}
              className='w-full cursor-pointer h-fit my-5 flex flex-wrap justify-around gap-5 shadow-md hover:shadow-sm transition-all bg-white p-5 rounded-md'>
              <div className='lg:w-2/12 md:w-full w-full flex items-center'>
                <Image className='rounded-md lg:h-24 h-56 w-full' height={150} width={150} src={page.image} alt='' />
              </div>
              <div className='lg:w-9/12 md:w-full w-full flex flex-wrap items-center'>
                <h2 className='font-semibold text-xl my-2'>{page.title}</h2>
                <p className='text-sm font-extralight'>{page.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogIndex;