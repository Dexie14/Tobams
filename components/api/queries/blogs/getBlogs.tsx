import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/components/hooks/axiosInstace";

export type BlogType = {
    canonical_url: string;
    collection_id: number | null;
    comments_count: number;
    cover_image: string;
    created_at: string;
    crossposted_at: string | null;
    description: string;
    edited_at: string;
    id: number;
    language: string;
    last_comment_at: string;
    path: string;
    positive_reactions_count: number;
    public_reactions_count: number;
    published_at: string;
    published_timestamp: string;
    readable_publish_date: string;
    reading_time_minutes: number;
    slug: string;
    social_image: string;
    subforem_id: number;
    tag_list: string[];
    tags: string;
    body_html: string;
    title: string;
    type_of: string;
    url: string;
  };

export const QUERY_KEY_BLOGS = "getBlogs";

const getBlogs = async (): Promise<BlogType[]> => {
  const response = await axiosInstance.get(`/api/articles`);

  console.log(response.data, "blogs"); 
  return response.data;
};

const useGetBlogs = () => {
  return useQuery<BlogType[]>({
    queryKey: [QUERY_KEY_BLOGS],
    queryFn: getBlogs,
    staleTime: 10,
  });
};

export default useGetBlogs;
