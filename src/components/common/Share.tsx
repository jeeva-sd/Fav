import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ShareButtons = ({ url }: any) => {
  const encodedUrl = encodeURIComponent(`https://www.favinsta.com${url}`);

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      '_blank'
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodedUrl}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?url=${encodedUrl}`,
      '_blank'
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodedUrl}`,
      '_blank'
    );
  };

  return (
    <div className='flex flex-wrap w-full mt-10 gap-5'>
      <div className='w-full font-light text-sm'>
        If you found this post helpful, please share it on social media!
      </div>

      <div onClick={shareOnFacebook} className='cursor-pointer'>
        <FaFacebook fontSize={30} className='fill-indigo-700' />
      </div>
      <div onClick={shareOnTwitter} className='cursor-pointer'>
        <FaTwitter fontSize={30} className='fill-sky-400' />
      </div>
      <div onClick={shareOnLinkedIn} className='cursor-pointer'>
        <FaLinkedin fontSize={30} className='fill-sky-800' />
      </div>
      <div onClick={shareOnWhatsApp} className='cursor-pointer'>
        <FaWhatsapp fontSize={30} className='fill-green-500' />
      </div>
    </div>
  );
};

export default ShareButtons;