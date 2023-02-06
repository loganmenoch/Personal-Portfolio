import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Software Developer", "Designer", "Hard Worker"], 
          startDelay: 300,
          typeSpeed: 150,
          backSpeed: 150,
          backDelay: 250,
          loop: true,
          showCursor: true,
          cursorChar:"_"
        });
        return () => {
            typed.destroy();
          };
        }, []);

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Logan Enoch</h1>
                <p>I'm A <span ref={el}></span></p>
            </div>
        </section>
    );
}

export default Hero;