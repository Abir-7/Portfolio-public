/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { FaGithubSquare, FaReact } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

AOS.init();

const MyProject = ({ projects }) => {
    return (
        <div className="px-4 sm:px-8 lg:px-16">
            <div className="flex justify-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-200 border-b-2 inline-block p-2 rounded-xl">
                    My Projects
                </h1>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {projects?.data?.map((project) => (
                    <div
                        key={project._id}
                        className="w-full  sm:max-w-md p-4 bg-base-200 rounded-lg hover:-translate-y-1 duration-500"
                        data-aos="fade-up"
                    >
                        <div className="flex flex-col">
                            {/* Project Image */}
                            <div className="p-3 mx-auto w-full">
                            <div className={` rounded-lg h-[250px] ease-in-out duration-[5000ms] bg-cover bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${project?.photo[0]})` }}></div>
                            </div>
                            {/* Project Details */}
                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold text-gray-300">
                              <Link to={`/project/${project?._id}`}> {project.name}</Link>     
                                </h1>
                                <p className="py-4 text-sm sm:text-base text-gray-400">
                                    {project.description}
                                </p>
                                {/* Links */}
                                <div className="flex items-center gap-3 text-sm sm:text-base">
                                    <p className="flex items-center gap-1">
                                        <span className="text-2xl">
                                            <FaGithubSquare />
                                        </span>
                                        <a className="link-hover" href={project.client} target="_blank">
                                            Client
                                        </a>
                                    </p>
                                    <p className="flex items-center gap-1">
                                        <span className="text-2xl">
                                            <FaGithubSquare />
                                        </span>
                                        <a className="link-hover" href={project.server} target="_blank">
                                            Server
                                        </a>
                                    </p>
                                    <p className="flex items-center gap-1">
                                        <span className="text-2xl text-blue-600">
                                            <FaReact />
                                        </span>
                                        <a className="link-hover" href={project.live} target="_blank">
                                            Live Site
                                        </a>
                                    </p>
                                </div>
                                {/* Technologies */}
                                <div className="flex items-center flex-wrap gap-3 mt-5">
                                    {project?.technologies?.map((skill, index) => (
                                        <img
                                            key={index}
                                            className="w-[24px] sm:w-[30px]"
                                            src={skill.icon}
                                            alt=""
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}  
        
            </div>
        </div>
    );
};

export default MyProject;
