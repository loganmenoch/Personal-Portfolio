import ProgressBar from "bootstrap-progress-bar";

function Skills(){

    return(
        <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Many of the projects I have worked on have involved various technologies, 
            including Java, Spring, BootStrap, MySQL, JavaScript, React, and JPA. Currently, I am pursuing an AWS Certification and a Google UI/UX Certification. 
            The progress bars below display my comfort levels with the technologies and languages I have been exposed to while at Dev10.</p>
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
              <span className="skill">JavaScript <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar width="85%"/>
              </div>
            </div>

            <div className="progress">
              <span className="skill">AWS (Working towards Certification)<i className="val">50%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar width="50%"/>
              </div>
            </div>

            <div className="progress">
              <span className="skill">UI/UX (Working towards Certification)<i className="val">50%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar width="50%"/>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    )
}

export default Skills;