import { axiosInstance } from "../../axiosInterceptor/axios";

export const getAllBlog = async () => {
  try {
    const res = await axiosInstance.get(`/blogs`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
export const getSigleBlog = async (id) => {
  try {
    const res = await axiosInstance.get(`/blogs/${id}`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  throw new Error(error?.response?.data?.message || error?.message || error);
};
