import 'react-slideshow-image/dist/styles.css'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

function PortfolioProject(){
    const [open, setOpen] = useState(false);

    return (
        <div style={{marginLeft: "10em"}}>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                <h2>Development Portfolio</h2>
                <ol>
                    <li><a href="/">Home</a></li>
                    <li>Development Portfolio</li>
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
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Vqbz4201onQ" allowFullScreen height="550px" width="850px"></iframe>
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
                            <li><strong>Category</strong>: Independent Project</li>
                            <li><strong>Time Span</strong>: 1 Week</li>
                            <li><strong>Project date</strong>: 01 January 2023</li>
                            <li><strong>GitHub Repository</strong>: </li>
                        </ul>
                        </div>
                        <div className="portfolio-description">
                        <div className="position-relative mt-4">
                            <button type="button" className="button-52" onClick={() => setOpen(true)}>
                                Project Images
                            </button>
                        </div>
                        <p style={{marginTop:"1em"}}>
                            This portfolio is a culmination of my completed development projects thus far.
                            <p><strong>Technologes:</strong></p>
                            <p style={{marginLeft:"1em"}}>BootStrap, JS, React, Google Maps API, Lightbox, SlideShow, YouTube</p>
                            <p><strong>Development Tools:</strong></p>
                            <p style={{marginLeft:"1em"}}>VS Code, Node</p>
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
                    { src: 'assets/img/PortfolioProject/MainGit.jpg', title:"Main.js Structure"  },
                    { src: "assets/img/PortfolioProject/DoGooderersOriginal.jpg", title:"Light Box for Image Slider" },
                    
                ]}
                plugins={[Captions]}
            />
        </div>
    )
}

export default PortfolioProject;