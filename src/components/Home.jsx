import "../assets/styles/Home.css";
import "../assets/styles/App.css";
import "../assets/styles/intro-effect.css";
import Socials from "./Socials";
import { useEffect } from "react";
import { blinkAndType } from "../assets/lib/intro-animation";

const Home = () => {
  useEffect(() => {
    // Reset the text content before typing starts
    const typedTextSpan = document.getElementById("typed-text");
    const cursorSpan = document.querySelector(".cursor");

    if (typedTextSpan && cursorSpan) {
      typedTextSpan.textContent = ""; // Clear any existing text
      cursorSpan.classList.remove("show-cursor", "hide-cursor"); // Reset cursor
    }

    blinkAndType(); // Start the animation

    return () => {
      // Cleanup logic to avoid multiple initializations on re-render
      if (cursorSpan) {
        cursorSpan.classList.remove("show-cursor");
      }
    };
  }, []);

  return (
    <section className="intro" id="intro">
      <h5 className="highlight">Hello World!</h5>
      <h1><span id="typed-text"></span><span className="cursor">|</span></h1>
      <p>Full Stack Developer | Graphics Designer</p>
      <a className="to-about" href="#about">
        <p>MORE ABOUT ME</p>
      </a>
      <Socials />
    </section>
  );
};

export default Home;
