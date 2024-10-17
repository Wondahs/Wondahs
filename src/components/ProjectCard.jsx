/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  return (
    <div className="project work-card">
      <div className="title">
        <h3 className="role">{project.name}</h3>
        <p className="duration">{project.duration}</p>
      </div>

      <div className="border-line"></div>
      <div className="company">
        <p className="description">{project.description}</p>
        <ul className="technologies">
          <p>Technologies Used:</p>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="links">
          <a className="live" href={project.liveLink}>
            Check it out
          </a>
          <a className="live" href={project.repoLink}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
