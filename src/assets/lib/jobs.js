import Ajuwaya from '../images/Ajuwaya Night Flier.jpg'
import Drama from '../images/Drama sunday2.jpg'
import POP from '../images/POP.jpg'
import Transformation from '../images/Power of transformation.jpg'
import Thanksgiving1 from '../images/Thanksgiving service.-1jpg.jpg'
import Thanksgiving2 from '../images/Thanksgiving Sunday.jpg'

export const designs = [Ajuwaya, Drama, POP, Transformation, Thanksgiving1, Thanksgiving2]

const designJob = {
  id: 1,
  role: "Graphics Designer",
  duration: "Jan 2024 - Present",
  company: "Nigeria Christian Corpers' Fellowship",
  location: "Minna, Niger State, Nigeria.",
  description:
    "As a graphics designer, I create visually compelling materials for the organization, including flyers, banners, and social media content for various events and programs. My role involves working closely with the leadership team to ensure the designs effectively communicate the fellowship's mission and vision while maintaining a consistent visual identity across all platforms.",
  technologies: ["ADOBE PHOTOSHOP", "CANVA"],
};

const webStartJob = {
  id: 2,
  role: "Founder/Lead Instructor",
  duration: "August 2024 - Present",
  company: "WebStart Institute",
  location: "Lagos, Nigeria.",
  description:
    "As the Founder and Lead Instructor at WebStart Institute, I oversee the development and execution of comprehensive web development courses, focusing on HTML, CSS, and JavaScript. I mentor students, guiding them from the basics to more advanced concepts, ensuring they gain hands-on experience through practical projects. I also manage curriculum design, facilitate workshops, and collaborate with industry professionals to enhance the learning experience and ensure students are well-prepared for the tech industry.",
  technologies: ["HTML", "CSS", "JAVASCRIPT"],
};

const revelatioJob = {
  role: "Backend Developer",
  duration: "October 2024 - Present",
  company: "Revelatio",
  location: "Remote",
  description:
    "As a Backend Developer at Revelatio, I am responsible for designing, building, and maintaining the server-side logic of the company's web applications. My role involves working extensively with Python and Flask to create robust APIs, handling data management using MySQL, and ensuring seamless integration with the front-end team. I also contribute to the development of scalable architectures and optimize database queries for enhanced performance.",
  technologies: ["Python", "Flask", "MySQL"],
};

export const projects = [
  {
    name: "GradeGenius",
    duration: "July 2024 - Present",
    description:
      "GradeGenius is a web application designed to help students and teachers track academic progress. Built with Python Flask and Jinja templating, the app features a GPA calculator and will soon include a CGPA calculator and grade record management. It allows users to calculate their academic standing and generate reports in a user-friendly interface.",
    technologies: ["Python", "Flask", "Jinja", "HTML", "CSS", "JavaScript"],
    liveLink: "https://wondahs.pythonanywhere.com/",
    repoLink: "https://github.com/Wondahs/gradegenius/",
  },
  {
    name: "Mongo-CRUD",
    duration: "May 2024 - Present",
    description:
      "Mongo-CRUD is a versatile web application that allows users to manage CRUD operations for MongoDB collections. Designed with Express.js and Mongoose, the app can be configured to handle any collection and database. It's a practical solution for developers needing a flexible, full-stack CRUD interface.",
    technologies: ["JavaScript", "Express.js", "Mongoose", "MongoDB"],
    liveLink: "https://github.com/Wondahs/mongo_CRUD",
    repoLink: "https://github.com/Wondahs/mongo_CRUD",
  },
  {
    name: "World Explore",
    duration: "June 2024 - Present",
    description:
      "World Explore is a web application built with Next.js and TypeScript, designed to provide detailed information about countries around the world. It uses a locally hosted JSON file for country data, which is served through an API and displayed on the frontend. The app allows users to explore countries based on their name or region and provides key facts and statistics.",
    technologies: ["Next.js", "TypeScript", "HTML", "CSS"],
    liveLink: "https://world-explore.vercel.app/",
    repoLink: "https://github.com/Wondahs/countries/",
  },
  {
    name: "JobSync",
    duration: "August 2024 - Present",
    description:
      "JobSync is a job search web application that aggregates job listings from various job APIs. The app, built with React and JavaScript, allows users to search and filter jobs based on criteria such as location, title, and company. It provides an intuitive interface for job seekers to find relevant opportunities and apply directly from the platform.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "APIs"],
    liveLink: "https://jobsync-85om.onrender.com/",
    repoLink: "https://github.com/Wondahs/alx-portfolio_project/",
  },
];

export default projects;

export const jobs = [designJob, webStartJob, revelatioJob];
