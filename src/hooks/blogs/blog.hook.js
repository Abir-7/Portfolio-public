import { useQuery } from "@tanstack/react-query";
import { getAllBlog, getSigleBlog } from "../../service/blogs";

export const useGetAllBlog = () => {
  return useQuery({
    queryKey: ["getAllBlog"],
    queryFn: () => getAllBlog(),
  });
};
export const useGetSingleBlog = (id) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["getSingleBlog"],
    queryFn: () => getSigleBlog(id),
  });
};
