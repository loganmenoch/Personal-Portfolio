import 'react-slideshow-image/dist/styles.css'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";


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
                <div class="col-lg-12">
                    <div class="portfolio-details-slider swiper">
                    <div class="swiper-wrapper align-items-center">

                        <div class="swiper-slide">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QWXCFuMSd50" allowfullscreen height="550px" width="850px"></iframe>
                        </div>
                    </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                
                </div>

                <div className="col-lg-4">
                    <div className="portfolio-info">
                    <h3>Capstone Details</h3>
                    <ul>
                        <li><strong>Category</strong>: Group Project</li>
                        <li><strong>Time Span</strong>: 2 weeks</li>
                        <li><strong>Project date</strong>: 05 November 2022</li>
                        <li><strong>Project Status</strong>: No Live Demo</li>
                    </ul>
                    </div>
                    <div className="portfolio-description">
                    <div className="position-relative mt-4">
                        <img src="https://www.pathhelps.org/wp-content/uploads/2017/12/PATH.Icon_.Mission.png" className="img-fluid rounded-4" style={{height:"100px", marginRight:"1em"}} alt=""/>
                        <button type="button" onClick={() => setOpen(true)}>
                            Capstone Images
                        </button>
                    </div>
                    <p style={{marginTop:"1em"}}>
                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
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
                { src: "https://www.pathhelps.org/wp-content/uploads/2017/12/PATH.Icon_.Mission.png" },
                { src: "/image2.jpg" },
                { src: "/image3.jpg" },
                ]}
            />

        </div>
    )
}

export default DoGooderersOriginal;