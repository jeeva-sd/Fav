import { RiVideoFill } from 'react-icons/ri';
import { HiPhotograph } from 'react-icons/hi';
import { MdOutlinePhotoSizeSelectLarge } from 'react-icons/md';
import { FcPhotoReel } from 'react-icons/fc';

const QuickPages = () => {
  const pages: any = [
    {
      title: 'Reel',
      icon: <FcPhotoReel fontSize={30} />
    },
    {
      title: 'Video',
      icon: <RiVideoFill fontSize={30} />
    },
    {
      title: 'Photo',
      icon: <HiPhotograph fontSize={30} />
    },
    {
      title: 'Thumbnail',
      icon: <MdOutlinePhotoSizeSelectLarge fontSize={30} />
    }];

  return (
    <div className='flex gap-12 py-4 justify-center'>
      {pages.map((page: any, index: number) => {
        return (
          <div key={index} className='flex flex-col gap-2 items-center cursor-pointer'>
            <div className='w-fit p-2 bg-white rounded-md shadow-md'>
              <span className=''>{page.icon}</span>
            </div>
            <div className='w-full text-center flex justify-center'>
              <span className='text-sm'>{page.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuickPages;