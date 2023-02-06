import { Link } from "react-router-dom";
import Hero from "./Misc/Hero";
import AboutUs from "./Misc/AboutUs";
import Skills from "./Misc/Skills";
import Resume from "./Misc/Resume";
import Portfolio from "./Misc/Portfolio";
import Footer from "./Misc/Footer";
function Main() {

    function handleSubmit(){
        alert("Contact Form Submitted! We will reach out to you shortly.");
      }

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
            <script src="../../public/assets/vendor/aos/aos.js"></script>
            <script src="../../public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="../../public/assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="../../public/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="../../public/assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="../../public/assets/vendor/typed.js/typed.min.js"></script>
            <script src="../../public/assets/vendor/waypoints/noframework.waypoints.js"></script>
            <script src="../../public/assets/vendor/php-email-form/validate.js"></script>
            <script src="../../public/assets/js/main.js"></script>

        </div>
    );
}

export default Main;