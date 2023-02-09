import 'react-slideshow-image/dist/styles.css'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

function DoGooderersUpdated(){
    const [open, setOpen] = useState(false);

    return (
        <div>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                <h2>DoGooderers Updated</h2>
                <ol>
                    <li><a href="/">Home</a></li>
                    <li>DoGooderers Updated</li>
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
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/soJk1i65vY4" allowFullScreen height="550px" width="850px"></iframe>
                        </div>
                    </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                </div>

                <div className="col-lg-4">
                    <div className="portfolio-info">
                    <h3>
                        Project Details
                    </h3>
                    <ul>
                        <li><strong>Category</strong>: Independent Updates to Existing</li>
                        <li><strong>Time Span</strong>: 1 Week</li>
                        <li><strong>Project date</strong>: 05 December 2022</li>
                        <li><strong>Group Members (original) :</strong> <Link to='https://www.linkedin.com/in/anthony-flowers-978a6b105/'>Anthony Flowers</Link><br/>
                                                                        <Link to='https://www.linkedin.com/in/matthew-maurice-8b7b54242/' style={{marginLeft:"57%"}}>Matthew Maurice</Link></li>
                    </ul>
                    </div>
                    <div className="portfolio-description">
                    <div className="position-relative mt-4">
                        <button type="button" className="button-52" onClick={() => setOpen(true)}>
                            Project Images
                        </button>
                    </div>
                    <p style={{marginTop:"1em"}}>
                        I updated the CSS and functionality of the original DoGooderers Group project as a way to explore various aspects of front end development. 
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
                { src: "assets/img/DUproject/home.png", title:"Home" },
                { src: 'assets/img/DUproject/heroes.png', title:"Navigation"  },
                { src: 'assets/img/DUproject/about.jpg', title:"About Us" },
                { src: 'assets/img/DUproject/counter.jpg', title:"Embeded video and counter"},
                { src: 'assets/img/DUproject/services.jpg', title:"Services"},
                { src: 'assets/img/DUproject/photogallery.jpg', title:"Photo Gallery", description:"Photos can be filtered by the content or volunteer activity." },
                { src: 'assets/img/DUproject/faq.jpg', title:"Volunteer Logs", description:"Each Volunteer log includes the organization they volunteered with, if applicable, the start and end times, the and tasks completed while volunteering. Users may also describe what they liked and disliked about the experience in the 'Task' section." },
                { src: 'assets/img/DUproject/contact.jpg', title:"Contact Form", description:"Users may contact the DoGooderers team with any concerns about the website." },
                { src: 'assets/img/DUproject/login.jpg', title:"Login/ Register" },
                { src: 'assets/img/DUproject/logs.jpg', title:"Volunteer Logs", description:"Each Volunteer log includes the organization they volunteered with, if applicable, the start and end times, the and tasks completed while volunteering. Users may also describe what they liked and disliked about the experience in the 'Task' section." },
                { src: 'assets/img/DUproject/map.jpg', title:"Find Organizations", description:"The Google Map loads to the users current location and finds searched organizations within a limited radius." },
                { src: 'assets/img/DUproject/competitions.jpg', title:"Competitions", description:"Users can learn more about competitions, how to make one, and explore the competions they are currently hosting/ participating in." },
                { src: 'assets/img/DUproject/kindness.jpg', title:"Competition", description:"Competitions have a leader board that show the competition moderators and all the participant hours that count towards the total. " },

                ]}
                plugins={[Captions]}
            />
        </div>
    )
}

export default DoGooderersUpdated;