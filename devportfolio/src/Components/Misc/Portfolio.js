function Portfolio(){

    return(
        <section id="portfolio" className="portfolio section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

  
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    );
}

export default Portfolio;