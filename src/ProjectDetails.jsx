import { useGetSignleProject } from "./hooks/projects/project.hook";
import { useParams } from 'react-router-dom'
const ProjectDetails = () => {
  const {id} = useParams() ; // Replace with a dynamic ID if required
  const { data } = useGetSignleProject(id);
  
  if (!data) {
    return <div>Loading...</div>;
  }

  const project = data.data;
console.log(project);
  return (
    <div className="p-5 container mx-auto">
      
     <div className="flex justify-center">
     <img 
        src={project.photo[0]} 
        alt={project.name} 
        className="w-full h-auto max-w-md rounded-lg mb-4"
      />
     </div>
     <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <p className="text-lg mb-4">{project.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Features:</h2>
      <ul className="list-disc ml-5 mb-4">
        {project.features.map((feature, index) => (
          <li key={index} className="mb-1">{feature}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Technologies:</h2>
      <div className=" ml-5 flex gap-3 flex-wrap mb-4">
        {project.technologies.map((tech, index) => (
          <div key={index} className="w-10"><img src={tech.icon} alt="" /></div>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <a 
          href={project.client} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
        >
          View Client Code
        </a>
        <a 
          href={project.server} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-secondary"
        >
          View Server Code
        </a>
        <a 
          href={project.live} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-accent"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
