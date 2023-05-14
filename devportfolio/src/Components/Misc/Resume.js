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
                    <li>enochloganm@gmail.com</li>
                </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                    <h4>Java Full Stack Developer Certification</h4>
                    <h5>Nov 2022</h5>
                    <p><em>Dev10 Software Development Program</em></p>
                    <p>Chosen for highly selective, paid Dev10 training program - less than 5% of applicants are hired<br/>
                    - Participated in a rigorous 3-month training program in Java Full Stack Development</p>
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
                <h4>Dev10 Software Development Associate : Genesis10</h4>
                <h5>July 2022 - May 2023</h5>
                <p><em>Minneapolis, MN </em></p>
                <ul>
                    <li>Designed, development, documented, tested, and debugged software applications throughout the program and after receiving the Java Certification</li>
                    <li>Experience with JavaScript technologies including React.js and Node.js</li>
                    <li>Experience with HTML, CSS, Git, Docker, API Development</li>
                    <li>Experience with database development and management via SQL (MySQL, PostgreSQL)</li>
                    <li>Explored new technologies related to the Software Development Lifecycle (AWS Deployment, Quality Engineering)</li>
                    <li>Worked on completion of Google UX Certification while waiting for client placement</li>
                </ul>
                </div>
                <div className="resume-item">
                <h4>Administrative/ Data Entry : The Enoch Group</h4>
                <h5>Seasonal : September 2019 - May 2022</h5>
                <p><em>Richmond, VA</em></p>
                <ul>
                    <li>Organized personal and business expenses for supervisor</li>
                    <li>Drafted monthly spending reports and communicated any payment discrepancies</li>
                    <li>Complied Spending reports using QuickBooks</li>
                    <li>Assisted with Real Estate client outreach (advertising, research, scheduling, etc.)</li>
                    <li>Delivered gifts to current and potential clients to increase outreach and referral initiatives</li>
                </ul>
                </div>
            </div>
            </div>

        </div>
    </section>
    )
}

export default Resume;