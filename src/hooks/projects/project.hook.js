import { useQuery } from "@tanstack/react-query";
import { getAllProject, getSingleProject } from "../../service/project";

export const useGetAllProject = () => {
  return useQuery({
    queryKey: ["getAllProject"],
    queryFn: () => getAllProject(),
  });
};
export const useGetSignleProject = (id) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["getSingleProject"],
    queryFn: () => getSingleProject(id),
  });
};
