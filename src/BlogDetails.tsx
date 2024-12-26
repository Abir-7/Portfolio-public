import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBlog } from "./hooks/blogs/blog.hook";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL params
  console.log(id);
  const { data, isLoading, error } = useGetSingleBlog(id); // Fetch blog data based on the ID
  console.log(data, error);

  if (isLoading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>Error fetching blog data.</div>; // Handle error state

  return (
    <div className="container mx-auto p-4">
      {data?.data ? (
        <div className="bg-base-200 shadow-md rounded-lg p-6">
          {/* Blog Image */}
          <img
            src={data?.data.photo}
            alt={data?.data.name}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />

          {/* Blog Title */}
          <h1 className="text-3xl font-bold mb-4">{data?.data.name}</h1>

          {/* Blog Description */}
          <div
            className="text-gray-300 text-sm mb-6"
            dangerouslySetInnerHTML={{
              __html: data?.data.description,
            }}
          />

          {/* Blog Created At */}
          <p className="text-sm text-gray-500">
            Created on {new Date(data?.data.createdAt).toLocaleDateString()}
          </p>
        </div>
      ) : (
        <div>No blog data available</div>
      )}
    </div>
  );
};

export default BlogDetails;
