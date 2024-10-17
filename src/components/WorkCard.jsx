/* eslint-disable react/prop-types */
const WorkCard = ({job}) => {
  return (
    <div className="work-card">
      <div className="title">
        <h3 className="role">{job.role}</h3>
        <p className="duration">{job.duration}</p>
      </div>
      
      <div className="border-line"></div>
      <div className="company">
        <h4 className="name">{job.company}</h4>
        <p className="location">{job.location}</p>
        <p className="description">
          {job.description}
        </p>
        <ul className="technologies">
          <p>Technologies Used:</p>
          {job.technologies.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
