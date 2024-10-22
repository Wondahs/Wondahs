import "../assets/styles/Socials.css";
import facebookIcon from "../assets/images/icons/facebook-icon.svg";
import githubIcon from "../assets/images/icons/github-icon.svg";
import twitterIcon from "../assets/images/icons/twitter-icon.svg";
import linkedinIcon from "../assets/images/icons/linkedin-icon.svg";
import frontendMentorIcon from "../assets/images/icons/frontendMentor-icon.svg";
import hackerRankIcon from "../assets/images/icons/hackerRankIcon.svg";


const Socials = () => {
  return (
    <ul className="socials">
      <li>
        <a href="https://www.linkedin.com/in/wondahs/">
          <img src={linkedinIcon} title="LinkedIn Profile" alt="LinkedIn Profile" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Wondahs/">
          <img src={githubIcon} title="Github Profile" alt="Github Profile" />
        </a>
      </li>
      <li>
        <a href="https://www.frontendmentor.io/profile/Wondahs">
          <img src={frontendMentorIcon} title="Frontend Mentor Profile" alt="Frontend Mentor Profile" />
        </a>
      </li>
      <li>
        <a href="https://www.hackerrank.com/profile/Wondahs">
          <img src={hackerRankIcon} title="Hacker Rank Profile" alt="Hacker Rank Profile" />
        </a>
      </li>
      <li>
        <a href="https://x.com/Viq_Wondahs">
          <img src={twitterIcon} title="Twitter Profile" alt="Twitter Profile" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/vic.wondahs">
          <img src={facebookIcon} title="Facebook Profile" alt="Facebook Profile" />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
