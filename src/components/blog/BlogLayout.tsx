const BlogLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='py-28 lg:px-10 md:px-10 px-2 bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen'>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="lg:w-7/12 md:w-7/12 w-full p-2 bg-white shadow-md rounded">
          {children}
        </div>
        <div className="lg:w-4/12 md:w-4/12 w-full p-2 bg-white shadow-md rounded">content</div>
      </div>
    </div>
  );
};

export default BlogLayout;