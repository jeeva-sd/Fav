// import Image from 'next/image';
// import { posts } from '~/content/posts';
// import { Posts } from '~/content/types';

const BlogSideBar = () => {
  return (
    <div className='flex flex-wrap w-full gap-5'>
      {/* {posts.map((post: Posts, index: number) => {
        return (
          <div key={index} className='flex flex-wrap bg-white p-10 w-full shadow-sm rounded-md'>
            <h3 className='mb-2'><strong>{post.title}</strong></h3>
            <Image className='my-3 rounded-md text-center border w-full' src={post.image} height={300} width={300} alt={post.title} />
            <p className='my-3'>{post.description}</p>
            <button className='text-blue-600'>Read more</button>
          </div>
        );
      })} */}
    </div>
  );
};

export default BlogSideBar;