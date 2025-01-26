"use client";

import SearchInputComp from "../input/SearchInputComp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCard from "./BlogCard";
import useGetBlogs, { BlogType } from "../api/queries/blogs/getBlogs";

import { useState } from "react";
import { Button } from "../ui/button";

const BlogList = () => {
  const { data: blogData, error, isPending } = useGetBlogs();

  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  console.log(blogData, "blogs bfre");
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  if (isPending)
    return (
      <div className="text-center my-20 text-primary text-2xl">Loading...</div>
    );
  if (error) return <div>Error loading blogs</div>;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredBlogs =
    blogData?.filter((blog) => {
      const matchesTag =
        selectedTag === "all" || blog.tag_list.includes(selectedTag);
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    }) || [];

  return (
    <div>
      <section className="my-5 flex justify-center items-center gap-6">
        <div className="">
          <SearchInputComp onChange={handleSearchChange} />
        </div>
        <div>
          <Select onValueChange={setSelectedTag}>
            <SelectTrigger className="sm:w-[180px] w-[40px]">
              <SelectValue placeholder="All posts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All posts</SelectItem>
              <SelectItem value="productivity">Productivity</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="programming">Programming</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>
      <section className="w-11/12 mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {filteredBlogs.length > 0 ? (
          filteredBlogs
            .slice(0)
            .reverse()
            .slice(0, visibleCount)
            .map((blog: BlogType, index: number) => (
              <BlogCard key={index} blogData={blog} />
            ))
        ) : (
          <div className="text-center col-span-full">No blogs available / match the filter</div>
        )}
      </section>
      {filteredBlogs.length > 0 && visibleCount < filteredBlogs.length && (
        <div className="flex justify-center mt-[70px] mb-4">
          <Button
            onClick={handleShowMore}
            className="border text-primary bg-transparent border-primary hover:text-white h-[40px] w-[135px] rounded-[4px]"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
