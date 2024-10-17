import "../assets/styles/Designs.css";
import { designs } from "../assets/lib/jobs";

const Designs = () => {
  return (
    <section id="designs" className="designs">
      <h6 className="highlight">Graphics Designs</h6>
      <p>
        Welcome to my Graphics Designs showcase! Here, you&apos;ll find a few
        creative projects that highlight my commitment to artistry and attention
        to detail. Each design reflects a unique vision and purpose. I&apos;m
        dedicated to transforming ideas into visually stunning pieces that
        resonate with audiences. Explore!
      </p>
      <div className="gallery">
        {designs &&
          designs.map((design, index) => (
            <img key={index} src={design} alt={`Design ${index + 1}`} />
          ))}
      </div>
    </section>
  );
};

export default Designs;
