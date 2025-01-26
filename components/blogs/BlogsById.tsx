"use client";
import { useParams } from "next/navigation";
import useGetBlogsByID from "../api/queries/blogs/getBlogsById";

const BlogsById = () => {
  const { id }: { id: string } = useParams();
  const { data: blogDatabyId } = useGetBlogsByID(id ?? "");
  console.log(blogDatabyId, "blogDatabyId");

  return <div>BlogsById</div>;
};

export default BlogsById;
