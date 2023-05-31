import { useSelector } from 'react-redux';
import DownloadBox from '~/components/instagram/DownloadBox';
import QuickPages from '~/components/instagram/QuickPages';
import { fetchPost } from '~/state/duck/instagram';
import { AppState, dispatch } from '~/state/store';
import SearchInput from '~/widgets/SearchInput';

const Reels = () => {
  const { loading: isRequesting, post } = useSelector((state: AppState) => state.instagram);

  const onSearch = (url: string) => {
    dispatch(fetchPost(url));
  };

  return (
    <div className='flex'>
      <div className='flex w-full min-h-[100vh] bg-slate-100 py-28'>
        <div className='lg:flex md:hidden hidden w-2/12'></div>

        <div className='lg:w-8/12 md:w-full w-full flex flex-wrap justify-center'>
          <div className='lg:w-7/12 w-11/12 text-center'>
            <div className='py-10'>
              <h1 className='lg:text-3xl md:text-2xl text-xl font-bold'>
                Instagram
                {' '}
                <span className='text-indigo-600'>Thumbnail</span>
                {' '}
                Downloader
              </h1>
            </div>
            <div>
              <SearchInput onSearch={onSearch} isRequesting={isRequesting} />
            </div>

            <div className='py-4'>
              <QuickPages />
            </div>
          </div>

          <div className='lg:w-6/12 md:6/12 w-11/12'>
            <DownloadBox post={post} />
          </div>
        </div>

        <div className='lg:flex md:hidden hidden w-2/12'></div>
      </div>
    </div>
  );
};

export default Reels;