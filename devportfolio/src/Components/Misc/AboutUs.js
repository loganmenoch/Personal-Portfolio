
function AboutUs(){

    return(
        <section id="about" className="about">
        <div className="container">
  
          <div className="section-title">
            <h2>About</h2>
            <p>I am originally from Richmond, Virginia, where I graduated from Virginia Commonwealth University with a Bachelors of Science. 
              I originally had an interest in Law, but after being exposed to the creativity and problem solving aspects of Software Development, 
              I decided to look for opportunities to shift my career field. Dev 10 provided the opportunity to immerse myself in development and make connections in the world of technology. </p>
          </div>
  
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/profile-img.jpg" className="img-fluid" style={{objectFit: "contain", borderRadius:"20px", border:"5px solid black"}} alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Software Developer &amp; Designer.</h3>
              <p className="fst-italic">
                While working for Dev10, I have gathered the tools I need to be a successful programmer and developer. 
                Additionally, I have found that <b>Front End Development and Design </b>are my favorite aspects of the work I have done thus far. 
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+804 651 8350</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Minneapolis, MN</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors of Science</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Primary Email:</strong> <span>lenoch@dev-10.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Secondary Email:</strong> <span>enochloganm@gmail.com</span></li>
                  </ul>
                </div>
              </div>

              <p style={{fontStyle:"italic", marginTop:"1.5em"}}>
                As a Dev10 Associate, I hope to be placed with a company 
                or client that values hard work, fosters a continuous 
                commitment to learning, and encourages 
                personal growth within the company. 
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
}

export default AboutUs;