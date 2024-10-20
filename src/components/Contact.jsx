import '../assets/styles/Contact.css'


const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h5 className="highlight">CONTACT</h5>
      <h1>I&apos;d Love To Hear From You.</h1>
      <p>
        Whether you have a question, a project in mind, or just want to say
        hello, feel free to reach out. Fill out the form below, and I&apos;ll get
        back to you as soon as possible!
      </p>
      <form className='contact-form'>
        <input type="text" placeholder='Name' required />
        <input type="email" placeholder='Email' required />
        <input type="text" placeholder='Subject' required />
        <textarea name="Message" id="" placeholder='Message'></textarea>
        <button type='button'>SUBMIT</button>
      </form>
    </section>
  );
};

export default Contact;
