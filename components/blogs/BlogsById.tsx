"use client";
import { useParams } from "next/navigation";
import useGetBlogsByID from "../api/queries/blogs/getBlogsById";

import blogOne from "@/icons/images/blogOne.png";

import { format } from "date-fns";
import useGetBlogs, { BlogType } from "../api/queries/blogs/getBlogs";
import BlogCard from "./BlogCard";
import { Button } from "../ui/button";
import Link from "next/link";

const BlogsById = () => {
  const { id }: { id: string } = useParams();
  const { data: blogDatabyId, isPending, error } = useGetBlogsByID(id ?? "");

  const {
    data: blogData,
    error: errorBlog,
    isPending: pendingBlog,
  } = useGetBlogs();
  console.log(blogDatabyId, "blogDatabyId");

  if (isPending)
    return (
      <div className="text-center my-20 text-primary text-2xl">Loading...</div>
    );
  if (error) return <div>Error loading this blog</div>;

  return (
    <div>
      <section>
        <p className="text-primary font-semibold bg-[#15151533] rounded-[4px] w-fit px-2 py-1.5 capitalize">
          {blogDatabyId.tags[0]} , {blogDatabyId.tags[1]}
        </p>
        <h5 className="sm:text-4xl text-2xl font-bold my-5">
          {blogDatabyId?.title}
        </h5>
        <p className="text-inputPlaceholderText">
          {format(new Date(blogDatabyId.created_at), "do MMMM, yyyy")}
        </p>
        <div className="my-3">
          <img
            src={
              blogDatabyId?.cover_image ?? blogDatabyId?.social_image ?? blogOne
            }
            alt="blogOne"
            className="w-full h-full rounded-t-[8px] object-cover"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogDatabyId?.body_html }} />
      </section>
      <section>
        <h2 className="py-7 mt-5 font-bold sm:text-3xl text-lg text-primary sm:w-full w-[70%] mx-auto text-center">
          More articles
        </h2>
        <section className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {pendingBlog ? (
            <div className="text-center my-20 text-primary text-2xl">
              Loading...
            </div>
          ) : blogData && blogData.length > 0 ? (
            blogData
              .filter((item: BlogType) => item?.id !== Number(id))
              .slice(0, 3)
              .map((blog: BlogType, index: number) => (
                <BlogCard key={index} blogData={blog} />
              ))
          ) : (
            <div className="text-center col-span-full">
              No more blogs available
            </div>
          )}
        </section>
        <div className="flex justify-center mt-[70px] mb-4">
          <Link href={"/blogs"}>
            <Button className="border text-primary bg-transparent border-primary hover:text-white h-[40px] w-[135px] rounded-[4px]">
              Explore More
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogsById;
