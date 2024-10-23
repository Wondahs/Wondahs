import "../assets/styles/About.css";
import dp from "../assets/images/Profile_Pic.jpg";
import cssIcon from '../assets/images/icons/css-icon.svg';
import bashIcon from '../assets/images/icons/bash-icon.svg';
import canvaIcon from '../assets/images/icons/canva-icon.svg';
import htmlIcon from '../assets/images/icons/html-icon.svg';
import mongoIcon from '../assets/images/icons/mongodb-icon.svg';
import mysqlIcon from '../assets/images/icons/mysql-icon.svg';
import nodejsIcon from '../assets/images/icons/nodejs-icon.svg';
import photoshopIcon from '../assets/images/icons/photoshop-icon.svg';
import pythonIcon from '../assets/images/icons/python-icon.svg';
import typescriptIcon from '../assets/images/icons/typescript-icon.svg';
import reactIcon from '../assets/images/icons/react-icon.svg';
import nextjsIcon from '../assets/images/icons/nextjs-icon.svg';

const About = () => {
  return (
    <section id="about">
      <h5 className="highlight">About</h5>
      <h1>Let me introduce myself.</h1>

      <div className="intro-info">
        <div className="profile-image">
          <img src={dp} alt="Profile Picture" />
        </div>

        <p className="lead">
          I&apos;m Wonders Prince Victor, a passionate and versatile full-stack
          developer and graphic designer with a keen eye for detail. I
          specialize in building efficient and user-friendly web applications,
          combining creativity and technical skills to deliver seamless digital
          experiences. My journey in the tech world is driven by a love for
          problem-solving, continuous learning, and helping others achieve their
          goals through technology.
        </p>
      </div>
      <div className="profile-and-skills">
        <div className="profile">
          <h3>Profile</h3>
          <p>
            Experienced in building innovative web applications and managing
            data and people effectively. Strong communicator with excellent
            problem-solving abilities, teamwork, and leadership skills.
          </p>

          <ul className="info-list">
            <li>
              <strong>Fullname:</strong>
              <p>Wonders Prince Victor</p>
            </li>
            <li>
              <strong>Birth Date:</strong>
              <p>July 27</p>
            </li>
            <li>
              <strong>Job:</strong>
              <p>Freelancer, Full Stack Developer, Graphics Designer</p>
            </li>
            <li>
              <strong>Email:</strong>
              <p>wondersprince1@gmail.com</p>
            </li>
          </ul>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <p>
            With a strong foundation in both front-end and back-end
            technologies, I strive to build scalable, secure, and user-centric
            applications. Below are some of the key technologies and tools I
            work with:
          </p>

          <div className="skill-bars">
            <img src={cssIcon} alt="CSS Icon" />
            <img src={htmlIcon} alt="HTML Icon" />
            <img src={typescriptIcon} alt="Typescript Icon" />
            <img src={reactIcon} alt="Reactjs Icon" />
            <img src={nextjsIcon} alt="Nextjs Icon" />
            <img src={bashIcon} alt="Bash Icon" />
            <img src={nodejsIcon} alt="Nodejs Icon" />
            <img src={pythonIcon} alt="Python Icon" />
            <img src={mysqlIcon} alt="MySQL Icon" />
            <img src={mongoIcon} alt="MongoDB Icon" />
            <img src={canvaIcon} alt="Canva Icon" />
            <img src={photoshopIcon} alt="Photoshop Icon" />
          </div>
        </div>
      </div>
      <div className="cta">
        <button className="cta-button">HIRE ME</button>
        <button className="download">DOWNLOAD CV</button>
      </div>
    </section>
  );
};

export default About;
