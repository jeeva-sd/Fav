
import { memo, useMemo } from 'react';
import { useRouter } from 'next/router';

const BreadCrumbs = () => {
  const router = useRouter();

  const post = useMemo(() => {
    const pathName = router.pathname;
    const pathArr = pathName?.split('/');

    return pathArr?.length > 0 ? pathArr[pathArr.length - 1].toUpperCase() : null;
  }, [router]);

  return (
    <div className='select-none'>
      <nav className='flex' aria-label='Breadcrumb'>
        <ol className='inline-flex items-center space-x-1 md:space-x-3'>
          <li className='inline-flex items-center select-none' onClick={() => router.push('/')}>
            <span className='inline-flex cursor-pointer items-center text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white'>
              <svg aria-hidden='true' className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path></svg>
              HOME
            </span>
          </li>
          <li onClick={() => router.push('/blog')} className='select-none'>
            <div className='flex items-center'>
              <svg aria-hidden='true' className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path></svg>
              <span className='ml-1 cursor-pointer text-sm font-medium text-gray-700 hover:text-indigo-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'>BLOG</span>
            </div>
          </li>
          <li aria-current='page'>
            <div className='flex items-center'>
              <svg aria-hidden='true' className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path></svg>
              <span className='ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400'>{post}</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default memo(BreadCrumbs);