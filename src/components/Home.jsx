import "../assets/styles/Home.css";
import "../assets/styles/App.css";
import Socials from "./Socials";

const Home = () => {
  console.log("This is Home");
  return (
    <div className="intro">
      <h5 className="highlight">Hello World,</h5>
      <h1>{`I'm Wonders Victor`}</h1>

      <p>Full Stack Developer | Graphics Designer</p>

      <a className="to-about" href="#about">
        <p>MORE ABOUT ME</p>
      </a>
      <Socials />
    </div>
  );
};

export default Home;
