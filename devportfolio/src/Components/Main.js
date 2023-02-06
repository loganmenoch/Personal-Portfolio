import { Link } from "react-router-dom";
import Hero from "./Misc/Hero";
import AboutUs from "./Misc/AboutUs";
import Skills from "./Misc/Skills";
import Resume from "./Misc/Resume";
import Portfolio from "./Misc/Portfolio";
import Footer from "./Misc/Footer";

function Main() {

    return (
        <div>
            <Hero />
        
            <main id="main">
                <AboutUs />
                <Skills />
                <Resume />
                <Portfolio />
                <Footer />
        
            </main>

            <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
            <script src="assets/vendor/aos/aos.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="assets/vendor/typed.js/typed.min.js"></script>
            <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>
            <script src="assets/js/main.js"></script>

        </div>
    );
}

export default Main;