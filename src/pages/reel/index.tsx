import React from 'react';
import { useSelector } from 'react-redux';
import DownloadBox from '~/components/instagram/DownloadBox';
import { fetchPost } from '~/state/duck/instagram';
import { AppState, dispatch } from '~/state/store';
import SearchInput from '~/widgets/SearchInput';

const Reels = () => {
  const {loading:isRequesting, post} = useSelector((state:AppState) => state.instagram);

  const onSearch = (url:string) => {
    dispatch(fetchPost(url));
  };

  return (
    <div className='flex'>
      <div className='w-full min-h-[100vh] flex text-center items-center bg-slate-100 border'>
        <div className='w-1/12 border'></div>

        <div className='w-10/12 flex justify-around items-center border'>
          <div className='w-5/12 border'>
            <div className='py-5'>
              <h1 className='text-3xl font-bold'>
                Instagram
                {' '}
                <span className='text-indigo-600'>Thumbnail</span>
                {' '}
                Downloader
              </h1>
            </div>
            <div>
              <SearchInput onSearch={onSearch} isRequesting={isRequesting}/>
            </div>
          </div>
          <div className='w-5/12 border'>
            <DownloadBox post={post}/>
          </div>
        </div>

        <div className='w-1/12 border'></div>
      </div>
    </div>
  );
};

export default Reels;