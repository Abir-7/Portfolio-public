import { useQuery } from "@tanstack/react-query";
import { getAllSkill } from "../../service/skills";

export const useGetAllSkill = () => {
  return useQuery({
    queryKey: ["getAllSkill"],
    queryFn: () => getAllSkill(),
  });
};
