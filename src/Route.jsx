
import { Routes, Route } from 'react-router-dom';
import App from './App';
import ProjectDetails from './ProjectDetails';
import Blog from './Blog';
import BlogDetails from './BlogDetails';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path='/blogs' element={<Blog></Blog>}></Route>
      <Route path='/blogs/:id' element={<BlogDetails></BlogDetails>}></Route>
      <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
          </Routes>
  );
};

export default Router;
