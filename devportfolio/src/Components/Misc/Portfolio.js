import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Grid, GridItem, SimpleGrid, Box } from "@chakra-ui/react";

function Portfolio(){

  const portfolio = [
    {
      name: "Dev10 Capstone",
      category: ["all"],
      src: "assets/img/DOproject/logo.png",
      link: "/doGooderersOriginal",
      height: "19.5em",
      paddingLeft: "3.7em"
    },
    {
      name: "DoGooderers Updated",
      category: ["all"],
      src: "assets/img/DUproject/home.png",
      link: "/doGooderersUpdated",
      height: "",
      paddingLeft: ""
    },
    {
      name: "Get Inked",
      category: ["all", "live"],
      src: "assets/img/websitebackground.jpg",
      link: "/doGooderersOriginal",
      height: "",
      paddingLeft: ""
    },
    {
      name: "Development Portfolio",
      category: ["all", "live"],
      src: "assets/img/websitebackground.jpg",
      link: "/portfolioProject",
      height: "",
      paddingLeft: ""
    }
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

    useEffect(() => {
      setProjects(portfolio);
    }, []);

    useEffect(() => {
      setProjects([]);
      const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
      setProjects(filtered);
    }, [filter]);


    return(
      <>
    
        <section id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Below is a collection of projects I have worked on, both individially and within groups, while working for Dev10. Each project has an attached video demo and photo gallery to explore various aspects of the program and the websites code. </p>
          </div>
  
          <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="100">
  
            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-wrap">
                <img src="assets/img/DOproject/logo.png" className="img-fluid" style={{height:"17em", paddingLeft:"4.5em"}} alt=""/>
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
  
             {/* <div className="col-lg-4 col-md-6 portfolio-item ">
              <div className="portfolio-wrap" style={{backgroundColor:"#281b47"}}>
                <img src="assets/img/GetInked/getInkedlogo.png" className="img-fluid" alt="" style={{height:"17em", paddingLeft:"4.5em"}}/>
                <div className="portfolio-links">
                  <Link to="/getInked" title="More Details">Get Inked</Link>
                  <a href="/getInked" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div> */}
  
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

         </>
    );
}

export default Portfolio;