import { Link } from "react-router-dom";
function Portfolio(){

    return(
        <section id="portfolio" className="portfolio section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

  
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
  
            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-wrap">
                <img src="assets/img/DOproject/logo.png" className="img-fluid" style={{height:"19.5em", paddingLeft:"3em"}} alt=""/>
                <div className="portfolio-links">
                  <Link to="/doGooderersOriginal" title="More Details">Dev10 Capstone</Link>
                  <a href="/doGooderersOriginal" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item ">
              <div className="portfolio-wrap">
                <img src="assets/img/DUproject/home.png" className="img-fluid" style={{height:"15em" }} alt=""/>
                <div className="portfolio-links">
                  <Link to="/dogooderersUpdated" title="More Details">DoGooderers Updated</Link>
                  <a href="/dogooderersUpdated" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
             <div className="col-lg-4 col-md-6 portfolio-item ">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <Link to="/doGooderersOriginal" title="More Details">Get Inked</Link>
                  <a href="/doGooderersOriginal" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-wrap">
                <img src="assets/img/websitebackground.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <Link to="/portfolioProject" title="More Details">Development Portfolio</Link>
                  <a href="/portfolioProject" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Portfolio;