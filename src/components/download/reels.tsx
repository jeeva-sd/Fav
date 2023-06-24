import React from 'react';
import { FiSearch } from 'react-icons/fi';

const reels = () => { // lg: md:
  return (
    <div className='w-full'>
      <div className='flex flex-wrap h-screen min-h-screen justify-evenly items-center py-[100px]'>

        <div className='lg:w-8/12 md:w-full w-full flex flex-wrap lg:justify-start md:justify-center lg:px-40 md:px-24 px-5'>
          <h2 className="lg:max-w-2xl md:w-full w-full lg:text-start md:text-center text-center mb-4 lg:text-5xl md:text-3xl text-3xl font-extrabold">
            Instagram <span className='text-indigo-600 leading-none'>Reel</span> Downloader
          </h2>
          <p className="lg:max-w-2xl md:w-full lg:text-start md:text-center text-center text-gray-600">
            This book covers the latest design principles and techniques, including responsive design, mobile interface
            design, and
            user research methodologies.
          </p>

          <div className='my-10 w-full'>
            <form onSubmit={(e: any) => console.log(e)} className='flex flex-wrap lg:justify-start md:justify-center justify-center lg:space-y-0 md:space-y-0 space-y-3'>
              <div className='relative flex w-full lg:w-7/12 md:w-7/12 items-center'>
                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <FiSearch className='text-gray-500'/>
                </div>
                <input name='search' type='url' className='p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border lg:border-r-0 md:border-r-0 outline-none border-gray-300 sm:rounded-none sm:rounded-l-lg focus:border-indigo-600' placeholder='Search here' id='search' required={true} />
              </div>
              <div className='lg:w-2/12 md:w-2/12 w-full'>
                <button type='submit' className='disabled:bg-indigo-300 py-[13px] px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-indigo-600 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-indigo-500 focus:ring-4 focus:indigo-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>Search</button>
              </div>
            </form>
          </div>

          <div>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">ssa</a>
            </div>
          </div>
        </div>

        <div className='lg:w-4/12 md:w-full w-full lg:h-4/6 md:h-[500px] flex justify-center items-center'>
          <div className='w-8/12 h-full bg-gradient-to-br from-blue-400 to-indigo-600 rounded-md'>
            Ads
          </div>
        </div>
      </div>
    </div>
  );
};

export default reels;