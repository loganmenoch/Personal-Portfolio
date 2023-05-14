
function AboutUs(){

    return(
        <section id="about" className="about">
        <div className="container">
  
          <div className="section-title">
            <h2>About</h2>
            <p>I am originally from Richmond, Virginia, where I graduated from Virginia Commonwealth University with a B.S. in Criminal Justice. 
              I originally had an interest in Law, but after being exposed to the creativity and problem solving aspects of Software Development, 
              I decided to look for opportunities to shift my career field. My position with Genesis10 allowed me to explore many aspects of Software Development, and I hope to apply all that I have learned in a new positon as a Junior developer. </p>
          </div>
  
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/profile-img.jpg" className="img-fluid" style={{objectFit: "contain", borderRadius:"20px", border:"5px solid black"}} alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Software Developer &amp; Designer.</h3>
              <p className="fst-italic">
                While working for Dev10, I gathered the tools I needed to be a successful programmer and developer. 
                Additionally, I have found that I have a knack for <b>Front End Development and Design</b>, but I would also love the opportunity to learn about other aspects of the tech world. 
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+804 651 8350</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Minneapolis, MN</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>GitHub:</strong> <span>https://github.com/loganmenoch</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors of Science</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Primary Email:</strong> <span>enochloganm@gmail.com</span></li>
                  </ul>
                </div>
              </div>

              <p style={{fontStyle:"italic", marginTop:"1.5em"}}>
                I hope to work with a company that values hard work, fosters a continuous 
                commitment to learning, and encourages 
                personal growth within the field of technology. 
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
}

export default AboutUs;