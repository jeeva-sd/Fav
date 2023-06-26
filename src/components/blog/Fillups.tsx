import NewsLetter from '../home/NewsLetter';
import RelatedContents from './RelatedContents';

const Fillups = () => {
  return (
    <div className='flex w-full justify-center antialiased'>
      <div className='md:px-1 px-5 lg:w-10/12 md:w-10/12 w-full bg-white'>
        <RelatedContents />
        <NewsLetter />
      </div>
    </div>
  );
};

export default Fillups;