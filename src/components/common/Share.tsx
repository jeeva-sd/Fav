import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ShareButtons = ({ url }: any) => {
  const encodedUrl = encodeURIComponent(`https://www.favinsta.com/${url}`);

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      'pop',
      'width=600, height=400, scrollbars=no'
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodedUrl}`,
      'pop',
      'width=600, height=400, scrollbars=no'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?url=${encodedUrl}`,
      'pop',
      'width=600, height=400, scrollbars=no'
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodedUrl}`,
      'pop',
      'width=600, height=400, scrollbars=no'
    );
  };

  return (
    <div className="flex flex-wrap w-full mt-10 gap-5">
      <div className="w-full font-light text-sm">
        If you found this post helpful, please share it on social media!
      </div>

      <button onClick={shareOnFacebook}>
        <FaFacebook fontSize={30} className="fill-indigo-700" />
      </button>
      <button onClick={shareOnTwitter}>
        <FaTwitter fontSize={30} className="fill-sky-400" />
      </button>
      <button onClick={shareOnLinkedIn}>
        <FaLinkedin fontSize={30} className="fill-sky-800" />
      </button>
      <button onClick={shareOnWhatsApp}>
        <FaWhatsapp fontSize={30} className="fill-green-500" />
      </button>
    </div>
  );
};

export default ShareButtons;
