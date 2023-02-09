function Resume(){
    return(
        <section id="resume" className="resume">
        <div className="container">

            <div className="section-title">
                <h2>Resume</h2>
            </div>

            <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                <h4>Logan Enoch</h4>
                <p><em>Innovative and deadline-driven Software Developer with experience in Full Stack Development and Object Oriented Programming; Passionate about the development process, from initial concept to final, polished deliverable.</em></p>
                <ul>
                    <li>Minneapolis, MN</li>
                    <li>(804) 651-8350</li>
                    <li>lenoch@dev-10.com</li>
                </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                    <h4>Java Full Stack Developer Certification</h4>
                    <h5>Nov 2022</h5>
                    <p><em>Dev10 Associate Program</em></p>
                    <p>Chosen for highly selective, paid Dev10 training program - less than 5% of applicants are hired<br/>
                    - Training in Java Cloud</p>
                </div>
                <div className="resume-item">
                    <h4>Bachelors of Science: <i>Criminal Justice</i></h4>
                    <h5>2019 - 2022</h5>
                    <p><em>Virginia Commonwealth University, Richmond, VA</em></p>
                    <p>Transferred from Brightpoint Community College <br/>Law Minor<br/>3.9 GPA</p>
                </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                <h4>Dev10 Associate : Genesis10</h4>
                <h5>July 2022 - Present</h5>
                <p><em>Minneapolis, MN </em></p>
                <ul>
                    <li>Immersive Training program with an emphasis on Full Stack Web Development.</li>
                    <li>Java Cloud, JavaScript, React, etc.</li>
                    <li>Granted Full Stack Certification after completion of 12 week program.</li>
                    <li>Continued Learning and pursuing various certifications including AWS, UI/UX Design, etc.</li>
                </ul>
                </div>
                <div className="resume-item">
                <h4>Court Watch Director : BLM RVA</h4>
                <h5>2021 - 2022</h5>
                <p><em>Richmond, VA</em></p>
                <ul>
                    <li>Attended Criminal Court proceedings to observe and document potential discrepencies in the treatment or sentencing of defendants. </li>
                    <li>Created training materials to be presented to all other participants and interns; Trained all participants in both group and individual capacities. </li>
                    <li>Developed an expansive internship opportunity for VCU students while simultaneously creating connections between BLM RVA and major academic institutions within the Greater Richmond Area.</li>
                    <li>Assisted in data entry coordination and the organization of all research gathered by Court Watch participants. </li>
                </ul>
                </div>
            </div>
            </div>

        </div>
    </section>
    )
}

export default Resume;