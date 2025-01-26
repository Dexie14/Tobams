import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/components/hooks/axiosInstace";
import { BlogType } from "./getBlogs";

export const QUERY_KEY_BLOGS = "getBlogs";

const getBlogsById = async (id: string): Promise<BlogType> => {
  const response = await axiosInstance.get(`/api/articles/${id}`);

  console.log(response.data, "blogs"); 
  return response.data;
};

const useGetBlogsByID = (id: string) => {
  return useQuery<BlogType>({
    queryKey: [QUERY_KEY_BLOGS, id],
    queryFn: () => getBlogsById(id),
    staleTime: 10,
    enabled: !!id,
  });
};

export default useGetBlogsByID;
