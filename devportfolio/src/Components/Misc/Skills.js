import ProgressBar from "bootstrap-progress-bar";

function Skills(){

    return(
        <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Technical Proficiencies</h2>
          <p>Many of the projects I have worked on have involved various technologies, including:<br></br>

            <b>Spring Framework · Spring MVC · Spring Boot · Spring Security · React.js · HTML · Cascading Style Sheets (CSS) · 
            Bootstrap · CSS · Amazon Web Services (AWS) · JPA · MySQL · Git · GitHub · Java · Java Script · Node.js</b>
          <br></br>
          <br></br>
            Currently, I am pursuing an AWS Certification and a Google UI/UX Certification. 
            The progress bars below display my experience levels with the technologies and languages I have been exposed to during my time as a Junior Developer.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML<i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar width="100%"/>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar width="95%"/>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Java <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar width="90%"/>
              </div>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="progress">
              <span className="skill">JavaScript <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar width="90%"/>
              </div>
            </div>

            <div className="progress">
              <span className="skill">React<i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar width="80%"/>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Spring<i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar width="80%"/>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    )
}

export default Skills;