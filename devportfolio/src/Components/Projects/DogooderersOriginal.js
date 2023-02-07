import 'react-slideshow-image/dist/styles.css'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

function DoGooderersOriginal(){
    const [open, setOpen] = useState(false);

    return (
        <div>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                <h2>DoGooderers Original</h2>
                <ol>
                    <li><a href="/">Home</a></li>
                    <li>Dev10 Capstone</li>
                </ol>
                </div>

            </div>
        </section>

        <section id="portfolio-details" className="portfolio-details" >
            <div className="container">

                <div className="row gy-4">

                <div className="col-lg-8">
                <div className="col-lg-12">
                    <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/71Fe7tPZ7vo" allowFullScreen height="550px" width="850px"></iframe>
                        </div>
                    </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                </div>

                <div className="col-lg-4">
                    <div className="portfolio-info">
                    <h3>
                        Capstone Details
                    </h3>
                    <ul>
                        <li><strong>Category</strong>: Group Project</li>
                        <li><strong>Time Span</strong>: 2 weeks</li>
                        <li><strong>Project date</strong>: 05 November 2022</li>
                        <li><strong>Group Members:</strong> <Link to='https://www.linkedin.com/in/anthony-flowers-978a6b105/'>Anthony Flowers</Link><br/>
                                                            <Link to='https://www.linkedin.com/in/matthew-maurice-8b7b54242/' style={{marginLeft:"36%"}}>Matthew Maurice</Link></li>
                    </ul>
                    </div>
                    <div className="portfolio-description">
                    <div className="position-relative mt-4">
                        <button type="button" className="button-52" onClick={() => setOpen(true)}>
                            Project Images
                        </button>
                    </div>
                    <p style={{marginTop:"1em"}}>
                        This was a group project that involved using all the knowledge our Dev-10 Cohort had accumulated over the 12 week Java training program.
                        <p><strong>Technologes:</strong></p>
                        <p style={{marginLeft:"1em"}}>BootStrap, MySQL, Java, Spring, React, JS, Google Maps API, JPA</p>
                        <p><strong>Development Tools:</strong></p>
                        <p style={{marginLeft:"1em"}}>Docker, IntelliJ, Maven, VS Code</p>
                    </p>
                    </div>
                </div>

                </div>

            </div>
     
            </section>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                { src: "assets/img/DOproject/logo.png", title:"DoGooderers Logo" },
                { src: 'assets/img/DOproject/DOhome.jpg', title:"Home Page", description:"The home page contains links to navigate the website, a sliding photo gallery, and an About Us section that describes the founding of the website and its contributors."  },
                { src: 'assets/img/DOproject/DOnavbar.jpg', title:"Navigation Bar", description:"The Navigation bar provides easy access to all aspects of the website." },
                { src: 'assets/img/DOproject/findorganizations.jpg', title:"Find Organizations Page", description:"The organizations pages allows users to find volunteer opportunities in their area based on their geographic location. Users can also explore the various services, that each organization offers. Registeres users can also review their volunteer experiences with each organization. Administrators can edit and delete organizations that contain offensive or inaccurate information. " },
                { src: 'assets/img/DOproject/Kindnessleague.jpg', title:"Competition Page", description:"Users can participate in compatitions with their friends based on the volunteer hours they have accumulated over a set period of time. These contests aim to encourage friendly comptition and increase community engagement within friend groups. " },
                { src: 'assets/img/DOproject/Volunteerhome.jpg', title:"Volunteer Page", description:"Registered users can track their volunteer hours and log their experiences. Additionally, users can see competitions in which they are actively participating." },
                { src: 'assets/img/DOproject/volunteerlogs.jpg', title:"Volunteer Logs", description:"Each Volunteer log includes the organization they volunteered with, if applicable, the start and end times, the and tasks completed while volunteering. Users may also describe what they liked and disliked about the experience in the 'Task' section." },
                { src: 'assets/img/DOproject/contactpage.jpg', title:"Contact Form", description:"Users may contact the DoGooderers team with any concerns about the website." },
                ]}
                plugins={[Captions]}
            />
        </div>
    )
}

export default DoGooderersOriginal;