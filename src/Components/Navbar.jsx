import { Link as ScrollLink } from 'react-scroll'; // For scroll functionality
import { NavLink, useLocation } from 'react-router-dom'; // For routing navigation

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const navLinks = (
    <>
      <li className="text-white">
        <ScrollLink to="intro" smooth={true} offset={-50} duration={500}>
          Introduction
        </ScrollLink>
      </li>
      <li className="text-white">
        <ScrollLink to="about" smooth={true} offset={-50} duration={500}>
          About Me
        </ScrollLink>
      </li>
      <li className="text-white">
        <ScrollLink to="skill" spy={true} smooth={true} offset={-50} duration={500}>
          Skills
        </ScrollLink>
      </li>
      <li className="text-white">
        <ScrollLink to="project" smooth={true} offset={-50} duration={500}>
          Projects
        </ScrollLink>
      </li>
      <li className="text-white">
        <ScrollLink to="contact" smooth={true} offset={-50} duration={500}>
          Contact Me
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 mb-10 md:mb-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
            {location.pathname !== '/blogs' && navLinks} {/* Hide nav links on /blogs page */}
          </ul>
        </div>
        <a className="text-3xl font-bold text-white">Abir&apos;s Portfolio</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-1">
          {location.pathname == '/' && navLinks}
          {location.pathname !== '/' && <li className="text-white">
            <NavLink to="/">Introduction</NavLink>
          </li>}
           {/* Hide nav links on /blogs page */}
          <li className="text-white">
            <NavLink to="/blogs">My Blog</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
