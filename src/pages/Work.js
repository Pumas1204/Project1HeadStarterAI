import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import '../Work.css';

export default function Work() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
      transition: true,
    });
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="section-title animate__animated">
        <h1>Tune in on my work</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="content">
            <h2>01</h2>
            <h3>AUTOBODY WEBSITE</h3>
            <p>
              Autobody shop website used to make estimates or insurance claims
              more efficient <a href="https://riverasautobodyshop.com/">Read More</a>
            </p>
          </div>
        </div>
        
        <div className="card">
          <div className="content">
            <h2>02</h2>
            <h3>Hispanic Church Website</h3>
            <p>
            Developing a modern, user-friendly website for a Hispanic Christian church. <a href="#">Read More</a>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h2>03</h2>
            <h3>Carodle</h3>
            <p>
              A replica of wordle with a little twist. It includes car related words. <a href="https://github.com/Pumas1204/Carodle">Read More</a>
            </p>
          </div>
        </div>
        
        <div className="card">
          <div className="content">
            <h2>04</h2>
            <h3>Snake Game</h3>
            <p>
              Snake game replice made in Java <a href="https://github.com/Pumas1204/Snake-game">Read More</a>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h2>05</h2>
            <h3>Weather App</h3>
            <p>
              Weather app that lets you know the weather of the location entered <a href="#">Read More</a>
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}