import BlogList from "@/components/blogs/BlogList";
import BlogsHero from "@/components/blogs/BlogsHero";
import Subscribe from "@/components/subscribe/Subscribe";

const BlogsPage = () => {
  return (
    <div>
      <BlogsHero />
      <div className="sm:mt-9 mt-3">
        <h2 className="py-7 font-semibold sm:text-3xl text-lg text-primary sm:w-full w-[70%] mx-auto text-center">
          Stay Updated with the Latest trends in Tobams Group
        </h2>
        <BlogList />
        <div className="my-8">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
