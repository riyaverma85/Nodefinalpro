


const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
       
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>We’re here to help you with your healthcare needs. Reach out to us anytime!</p>
          <ul>
            <li> 123 Health Street, New Delhi, India</li>
            <li> +91 98765 43210</li>
            <li>📧 support@medicareplus.com</li>
          </ul>
        </div>

        {/*================ Contact Form =============================*/}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
            
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            
            <label>Message</label>
            <textarea placeholder="Write your message..." required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
