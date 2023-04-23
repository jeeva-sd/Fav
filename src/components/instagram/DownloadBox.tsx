import { useMemo } from 'react';
import cricket from '../../assets/images/cricket-shot-mud.jpg';
import Image from 'next/image';

const DownloadBox = ({post = {}}:any) => {

  const {title, thumbnail, downloadLink} = useMemo(() => {
    let title: string = 'Welcome to FavInsta';
    let thumbnail: any = cricket;
    let downloadLink: string = 'aaa';

    if(post && post.hasOwnProperty('title')) {
      const {title, thumbnail, downloadLink} = post;
      return {title, thumbnail, downloadLink};
    }
    return {title, thumbnail, downloadLink};
  },[post]);

  console.log({title, thumbnail, downloadLink});

  return (
    <div className="flex font-sans bg-white rounded-md p-1 shadow-md">
      <div className="flex-none w-48 relative lg:flex md:flex hidden">
        <Image src={thumbnail || cricket} alt="" width={300} height={289} className="absolute inset-0 max-w-[200px] min-h-[100%] max-h-[100%] object-cover rounded-md" />
      </div>
      <form className="flex-auto p-6" onSubmit={() => window.open(downloadLink, '_blank')}>
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900 one-line"> {title} </h1>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
         In stock </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-sm">
            <label>
              <input className="sr-only peer" name="size" type="radio" value="xs" checked />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
         XS </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="s" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
         S </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="m" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
         M </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="l" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
         L </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="xl" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
         XL </div>
            </label>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button className="h-10 px-6 font-semibold rounded-md bg-indigo-600 text-white" type="submit">
         Download </button>
            <button onClick={() => window.open(thumbnail, '_blank')}
              className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
         Thumbnail </button>
          </div>
          <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-slate-700">
         Free shipping on all continental US orders. </p>
      </form>
    </div>
  );
};

export default DownloadBox;