import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";

function DoGooderersOriginal(){
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '550px',
      }

    const slideImages = [
        {
          url: 'image.url'        
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        },
      ];

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
                <div className="slide-container" >
                    <Fade>
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span style={{marginLeft:"30em"}}>{slideImage.caption}</span>
                        </div>
                        </div>
                    ))} 
                    </Fade>
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
                    {/* <iframe src="public/assets/Demo/Demo.mp4">Watch Website Demo</iframe> */}
                    <div className="position-relative mt-4">
                        <img src="https://www.pathhelps.org/wp-content/uploads/2017/12/PATH.Icon_.Mission.png" className="img-fluid rounded-4" style={{height:"100px", marginRight:"1em"}} alt=""/>
                        <a href="https://www.youtube.com/watch?v=pUkfK7nN4PQ">Watch Website Demo</a>
                        <video width="200px" height="100px" controls="controls">
                            <source src="Demo.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <p>
                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                    </p>
                    </div>
                </div>

                </div>

            </div>
            </section>

        </div>
    )
}

export default DoGooderersOriginal;