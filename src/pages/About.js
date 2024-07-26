import React, { useEffect, useRef } from 'react';
import '../About.css';
import profileImage from '../images/IMG_2204.JPG'; // Import the image
import image1 from '../images/IMG_0327.jpg'; // Import other local images
import image2 from '../images/IMG_0024.jpg';
import image3 from '../images/religion-cross-icon-filled-flat-sign-for-mobile-concept-and-web-design-christian-glyph-symbol-logo-illustration-graphics-vector.jpg';
import image4 from '../images/IMG_6561copy.jpg';
import image5 from '../images/IMG_6571.jpg';
import image6 from '../images/ASU-logo.png';
import image7 from '../images/Flag_of_Mexico.jpg';

export default function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (aboutRef.current) {
                const about = aboutRef.current;
                const rect = about.getBoundingClientRect();
                const inView = rect.top < window.innerHeight && rect.bottom >= 0;

                if (inView) {
                    about.classList.add('active');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial render

        // Cleanup listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
    ];

    return (
        <section className="about" id="about" ref={aboutRef}>
            <div className="photo-portfolio slide-in-left">
                <div className="container collage1">
                    <div className="grid-container">
                        {images.map((src, index) => (
                            <div className={`item item${index + 1}`} key={index}>
                                <img src={src} alt={`image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="about-details slide-in-right">
                <div className="section-title">
                    <h1>About Me</h1>
                </div>
                <div className="circular-image-container">
                    <img src={profileImage} alt="Your image" className="circular-image" />
                </div>
                <div className="about-data">
                    <div className="box">
                        <div className="text">
                            <p>
                                -A Computer science student at Arizona State University,<br /><br />
                                -A first-generation Hispanic student,<br /><br />
                                -A driven student to excel in college and make my family proud.<br />
                                Their words of wisdom have always resonated with me: <br />
                                "Do your best in everything, and the rewards will follow."
                            </p>
                            <a href="#" className="btn">Download CV</a>
                        </div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-info">
                                    <h4>Computer Scientist Diploma</h4>
                                    <span>60%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ '--clr': '#ffd15c', '--width': '60%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-info">
                                    <h4>Java Mastery</h4>
                                    <span>100%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ '--clr': '#ff4c60', '--width': '100%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-info">
                                    <h4>Front-Web Development Mastery</h4>
                                    <span>75%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ '--clr': '#6c6ce5', '--width': '75%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}