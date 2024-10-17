import projects, { jobs } from "../assets/lib/jobs";
import "../assets/styles/Resume.css";
import ProjectCard from "./ProjectCard";
import WorkCard from "./WorkCard";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h5 className="highlight styled-h5">RESUME</h5>
      <h1 className="styled-h1">More of my credentials</h1>
      <p className="hero">
        Dive into a selection of my notable projects that showcase my skills and
        passion for development. Each project reflects my commitment to creating
        innovative solutions and solving real-world problems. From collaborative
        work to personal endeavors, these projects highlight my journey and
        growth as a developer.
      </p>

      <h6>WORK EXPERIENCE</h6>
      <div className="work-experience">
        {jobs.map((job, index) => (
          <WorkCard key={index} job={job} />
        ))}
      </div>
      <h6>PERSONAL PROJECTS</h6>
      <div className="personal-projects work-experience">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Resume;
