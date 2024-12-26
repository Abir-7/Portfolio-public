
import { Link } from "react-router-dom";
import { useGetAllBlog } from "./hooks/blogs/blog.hook";

const Blog = () => {
  const { data } = useGetAllBlog();
  const blogs = data?.data;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-white">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.map((blog) => (
          <div
            key={blog._id}
            className="bg-base-200 text-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={blog.photo}
              alt={blog.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{blog.name}</h2>
            <div className="text-sm mb-4">
              {/* Render HTML content */}
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    blog.description.length > 50
                      ? `${blog.description.substring(0, 50)}...`
                      : blog.description,
                }}
              />
            </div>
            <Link to={`/blogs/${blog._id}`} className="text-blue-400 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
