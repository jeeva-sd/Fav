import { memo, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiSearch2Line } from 'react-icons/ri';
import { MdContentPaste } from 'react-icons/md';

const SearchInput = ({ value: customValue, placeholder: customPlaceholder, isRequesting, onSearch }: any) => {
  const placeholder = customPlaceholder || 'Search here';
  const [value, setValue] = useState(customValue || '');
  const [loading, setLoading] = useState(isRequesting || false);

  useEffect(() => setLoading(isRequesting), [isRequesting]);

  const handleSearch = () => onSearch(value);
  const handleClear = () => setValue('');
  const handlePaste = () => {
    navigator.clipboard.readText().then(
      clipText => (setValue(clipText)),
      err => console.log(err)
    );
  };

  return (
    <div className='w-full flex flex-wrap justify-center items-center gap-5'>
      <div className='relative lg:w-10/12 md:w-8/12 rounded-md shadow-sm w-full'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center p-5'>
          <span className='text-gray-500 sm:text-sm'>
            {loading ? <span className='flex items-center justify-center'>
              <span className='animate-ping absolute h-4 w-4 rounded-full bg-indigo-400 opacity-75'></span>
              <span className='rounded-full h-3 w-3 bg-indigo-600'></span>
            </span> : <RiSearch2Line />}
          </span>
        </div>
        <input
          type='text'
          name='search'
          id='search'
          value={value}
          placeholder={placeholder}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          onChange={e => setValue(e.target.value)}
          className='block w-full rounded-md
                            pr-20 pl-12 p-3
                            shadow-md
                            shadow-gray-300
                            sm:text-sm
                            outline-none
                            focus:ring-1
                            focus:ring-indigo-600
                            hover:bg-gray-50
                            focus:bg-white
                            focus:border-primary
                            transition-all'
        />

        <div className='absolute inset-y-0 right-0 flex items-center p-5 gap-3'>
          <span className='cursor-pointer text-gray-500 hover:text-black' onClick={handlePaste}><MdContentPaste fontSize={13} /></span>
          <span className='cursor-pointer text-gray-500 hover:text-black' onClick={handleClear}><AiOutlineClose fontSize={13} /></span>
        </div>
      </div>

      <div className='lg:hidden md:hidden w-full'>
        <button onClick={() => onSearch(value)}
          className='
          w-full
          transition-all
          shadow-md
          p-2
          px-10
          rounded-md
          bg-primary
          text-white
          hover:text-primary
          hover:bg-transparent
          border
         border-indigo-600'
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default memo(SearchInput);