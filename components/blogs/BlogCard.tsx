import Image from "next/image";
import blogOne from "@/icons/images/blogOne.png";
import Link from "next/link";
import { BlogType } from "../api/queries/blogs/getBlogs";
import { format } from "date-fns";
import defaultIcon from "@/icons/images/defaultIcon.png";

const BlogCard = ({ blogData }: { blogData: BlogType }) => {
  return (
    <div className="sm:max-w-[400px]">
      <div className="relative  h-[300px]">
        <img
          src={blogData?.cover_image ?? blogData?.social_image ?? blogOne}
          alt="blogOne"
          className="w-full h-full rounded-t-[8px]"
        />
        <div className="absolute z-[1000px] top-5 left-5 right-5 flex justify-between items-center">
          <p className="text-primary font-semibold blur-blur bg-white bg-opacity-60 rounded-[4px] w-fit px-2 py-1.5">
            {blogData.tag_list[0]} , {blogData.tag_list[1]}
          </p>
          <Image src={defaultIcon} alt="defaultIcon" className="sm:hidden block"/>
        </div>
        <div className="absolute bg-mainText bg-opacity-25 inset-0 z-[500px] rounded-t-[8px]" />
      </div>
      <main className="mt-6">
        <h5 className="sm:text-lg h-[30px] mb-2 font-semibold w-[90%]">
          {blogData?.title?.length > 50
            ? `${blogData.title.substring(0, 50)}...`
            : blogData.title}
        </h5>
        <p className="py-4 sm:text-base text-sm text-subText">
          {blogData?.description?.length > 70
            ? `${blogData.description.substring(0, 70)}...`
            : blogData.description}
        </p>
        <div className="flex items-center justify-between sm:text-sm text-xs">
          <aside className="flex items-center gap-2  text-subText">
            <p> {format(new Date(blogData.created_at), "do MMMM, yyyy")}</p>
            <p className="text-mainText hidden sm:block">|</p>
            <p className="hidden sm:block">
              {blogData?.reading_time_minutes} mins read
            </p>
          </aside>
          <Link
            href={`/blogs/${blogData?.id}`}
            className="flex items-center gap-2 border-b border-primary text-primary cursor-pointer"
          >
            View Post
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogCard;
