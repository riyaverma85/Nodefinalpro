


const Footer=()=>{
    return(
        <>
          
    <footer className="footer">
      <div className="footer-container">
        
        {/* About */}
        <div className="footer-section">
          <h2>MediCare+</h2>
          <p>
            Trusted doctor appointment system providing easy online booking,
            health consultations, and quality healthcare services at your
            fingertips.
          </p>
          
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#"> Home</a></li>   
            <li><a href="#"> Doctors</a></li>
            <li><a href="#"> Book Appointment</a></li>
            <li><a href="#"> Services</a></li>
            <li><a href="#"> Contact</a></li>
          </ul>
        </div>

        {/* Departments */}
        <div className="footer-section">
          <h3>Departments</h3>
          <ul>
            <li> Cardiology</li>
            <li> Neurology</li>
            <li> Dental</li>
            <li> Ophthalmology</li>
            <li> Pathology</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p> 123 Health Street, New Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@medicareplus.com</p>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" /><br/>
            {/* <button type="submit">Subscribe</button> */}
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 MediCare+ | All Rights Reserved | Designed for Doctor Appointment System
      </div>
    </footer>
 

  

        </>
    )
}

export default Footer;