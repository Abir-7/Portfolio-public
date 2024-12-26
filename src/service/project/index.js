import { axiosInstance } from "../../axiosInterceptor/axios";

export const getAllProject = async () => {
  try {
    const res = await axiosInstance.get(`/projects`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
export const getSingleProject = async (id) => {
  try {
    const res = await axiosInstance.get(`/projects/${id}`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
const handleError = (error) => {
  throw new Error(error?.response?.data?.message || error?.message || error);
};
