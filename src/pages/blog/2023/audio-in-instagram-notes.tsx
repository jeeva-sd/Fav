import { memo } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Headsection from '~/components/seo/Headsection';
import BlogLayout from '~/components/blog/BlogLayout';
import AuthorSection from '~/components/common/AuthorSection';
import { SeoParams } from '~/components/seo/types';
import { SD_audioInNotes } from '~/content/structuredData';
import singing from '~/assets/images/blog/singing.jpg';

const Image = dynamic(() => import('next/image'), { ssr: true });
const DynamicShareButtons = dynamic(() => import('~/components/common/Share'));

const TenHacks = () => {
  const { pathname } = useRouter();

  const seoParams: SeoParams = {
    title: 'How to add music to Instagram notes?',
    description: 'An Article about how to add music to notes in Instagarm and its related questions',
    keywords: 'Instagram notes, add music to notes in instagram, misuc in notes, add songs in notes',
    pageUrl: pathname,
    structuredData: SD_audioInNotes
  };

  return (
    <>
      <Headsection seoParams={seoParams} />

      <BlogLayout>
        <main className='pt-8 pb-16 lg:pt-8 lg:px-5 md:px-10 px-5 lg:pb-8 bg-white dark:bg-gray-900'>
          <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>

            <header className='mb-4 lg:mb-6 not-format'>
              <AuthorSection date={'20 June 2023'} />
              <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>How to add music to Instagram notes?</h1>

              <p className='lead text-gray-600'>
                To enhance the visual appeal of Instagram user, one popular method is adding songs in Instagram notes. In this article, we will explore the process of adding musical notes to your Instagram posts.
              </p>
            </header>

            <figure className='text-sm font-medium my-10'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={singing} alt='choosing right instagram hashtags' className='rounded-md aspect-video' />
              <figcaption>
                Photo by <a href='https://unsplash.com/@arstyy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Austin Neill</a> on <a href='https://unsplash.com/photos/hgO1wFPXl3I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
              </figcaption>
            </figure>
            <>
              <div className='max-w-3xl mx-auto pb-3'>
                <h2 className='text-xl font-bold mb-2 mt-10'>What are Songs in Instagram Notes?</h2>
                <p className='mb-4 text-gray-600'>
                  Songs in Instagram notes refer to the musical element that can be added to your Instagram Notes. By integrating notes into your content, you can create a more immersive experience for your audience. These notes are displayed as a visual representation of sheet music, providing a glimpse into the melody or rhythm of a particular song.
                </p>
                <h2 className='text-xl font-bold mb-2 mt-10'>Why to Add Songs in Instagram Notes?</h2>
                <p className='mb-4 text-gray-600'>
                  There are many reasons for adding songs in your Instagram Notes, but generally for:
                </p>
                <ol className='list-decimal list-outside ml-6 mb-4'>
                  <li className='text-gray-600'>Engaging Your Audience with Musical Visuals</li>
                  <li className='text-gray-600'>Conveying Emotions through Music</li>
                  <li className='text-gray-600'>Showcasing Your Personality and Style</li>
                </ol>
                <h2 className='text-xl font-bold mb-2 mt-10'>Are There Any Copyright Restrictions?</h2>
                <p className='mb-4 text-gray-600'>
                  When adding songs in Instagram notes to your posts, it&apos;s essential to consider copyright restrictions. Instagram has partnerships with various music labels and provides a vast library of licensed songs for users to choose from. By selecting songs from this library, you can ensure that your use of music complies with copyright regulations.
                </p>
                <h2 className='text-xl font-bold mb-2 mt-10'>Can I Add Multiple Songs in Instagram Notes?</h2>
                <p className='mb-4 text-gray-600'>
                  As of the latest Instagram update, you can only add one song in Instagram notes to each post. However, you can choose different parts of the song to feature as notes, allowing you to showcase various sections or highlights.
                </p>
                <h2 className='text-xl font-bold mb-2 mt-10'>Do Songs in Instagram Notes Play Automatically?</h2>
                <p className='mb-4 text-gray-600'>
                  No, songs in Instagram notes do not play automatically when someone views your post. Viewers have the option to tap on the notes to listen to a preview of the song or visit the full track on a music streaming platform.
                </p>
                <h2 className='text-xl font-bold mb-2 mt-10'>How to Add Songs in Instagram Notes?</h2>
                <ol className='list-decimal list-outside ml-6 mb-4 gap-3 flex flex-wrap'>
                  <li className='text-gray-600'>Open the Instagram app on your mobile device.</li>
                  <li className='text-gray-600'>Tap on the &quot;+&quot; button to create a new post.</li>
                  <li className='text-gray-600'>Select or capture the desired image or video for your post.</li>
                  <li className='text-gray-600'>Tap on the sticker icon (located at the top-right corner of the screen).</li>
                  <li className='text-gray-600'>Scroll through the sticker options and look for the &quot;Music&quot; sticker.</li>
                  <li className='text-gray-600'>Tap on the &quot;Music&quot; sticker to access the music library.</li>
                  <li className='text-gray-600'>Search for the song you want to add by typing its title or artist name in the search bar.</li>
                  <li className='text-gray-600'>Once you find the desired song, select the specific part of the song you want to include as notes.</li>
                  <li className='text-gray-600'>Customize the appearance of the notes by resizing or repositioning them on your post.</li>
                  <li className='text-gray-600'>Tap &quot;Done&quot; to finalize the addition of songs in Instagram notes to your post.</li>
                </ol>
              </div>
            </>

            <div>
              <DynamicShareButtons url={pathname} />
            </div>
          </article>
        </main>
      </BlogLayout>
    </>
  );
};

export default memo(TenHacks);