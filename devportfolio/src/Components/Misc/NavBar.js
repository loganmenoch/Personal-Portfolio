import { Link } from "react-router-dom";
import { useContext } from "react";

function Navbar(){

    return (
        <header id="header">
            <div className="d-flex flex-column">

            <div className="profile">
                <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
                <h1 className="text-light"><a href="/">Logan Enoch</a></h1>
                <div className="social-links mt-3 text-center">                
                    <a href="mailto:enochloganm@gmail.com" className="email"><i className="bi-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/enochmlogan/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/loganmenoch" className="github"><i className="bx bxl-github"></i></a>
                </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
                <ul>
                <li><a href="/#home" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="/#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="/#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                <li><a href="/#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Navbar;