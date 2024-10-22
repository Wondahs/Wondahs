import "../assets/styles/Contact.css";
import Socials from "./Socials";
import locationIcon from "../assets/images/icons/location-svgrepo-com.svg";
import emailIcon from "../assets/images/icons/email-icon.svg";
import phoneIcon from "../assets/images/icons/phone-icon.svg";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("meoqokzb");
  const formRef = useRef(null);

  if (state.succeeded) {
    formRef.current.reset();
    alert("Message sent successfully! I'll get back to you soon.");
  }
  return (
    <section className="contact" id="contact">
      <h5 className="highlight">CONTACT</h5>
      <h1 className="styled-h1">I&apos;d Love To Hear From You.</h1>
      <p>
        Whether you have a question, a project in mind, or just want to say
        hello, feel free to reach out. Fill out the form below, and I&apos;ll
        get back to you as soon as possible!
      </p>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <input id="name" name="name" type="text" placeholder="Name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
        <textarea name="Message" id="message" placeholder="Message"></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          SUBMIT
        </button>
      </form>
      <div className="contacts">
        <div className="contact-card">
          <img src={locationIcon} alt="" />
          <h5 className="highlight">WHERE TO FIND ME</h5>
          <p>Chukwuma Close, Ojo,</p>
          <p>Lagos, Nigeria.</p>
        </div>
        <div className="contact-card">
          <img src={emailIcon} alt="" />
          <h5 className="highlight">EMAIL ME AT</h5>
          <p>wondersprince1@gmail.com</p>
          <p>wonders.viq@gmail.com</p>
        </div>
        <div className="contact-card">
          <img src={phoneIcon} alt="" />
          <h5 className="highlight">CALL ME AT</h5>
          <p>Phone: (+234) 913 153 7344</p>
          <p>WhatsApp: (+234) 811 335 9915</p>
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default Contact;
