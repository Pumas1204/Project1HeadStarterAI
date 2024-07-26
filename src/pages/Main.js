import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
import '../Home.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from './Cube'; // Ensure the correct path

export default function Home() {
  useEffect(() => {
    const titles = gsap.utils.toArray('.text-wrapper p');
    const tl = gsap.timeline();

    titles.forEach(title => {
      const splitTitle = new SplitTextJS(title);

      if (title.classList.contains('stay')) {
        tl.from(splitTitle.chars, {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        }, "<");
      } else {
        tl.from(splitTitle.chars, {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        }, "<")
        .to(splitTitle.chars, {
          opacity: 0,
          y: -80,
          rotateX: 0,
          stagger: 0.02,
        }, "<1");
      }
    });
  }, []);

  return (
    <>
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {/* Cubes with different colors, texts, and paths */}
          <Cube position={[-5, -2, 0]} color="#FF0000" text="ABOUT" path="/about" />
          <Cube position={[5, -2, 0]} color="#00FF00" text="FUN" path="/fun" />
          <Cube position={[-5, 2, 0]} color="#0000FF" text="CONTACT" path="/contact" />
          <Cube position={[5, 2, 0]} color="#FFFF00" text="EXPERIENCE" path="/work" />
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <p>UI Designer</p>
          <p>C++</p>
          <p>Java</p>
          <p>Website Developer</p>
          <p>SQL</p>
          <p className="stay">Alan Rivera</p> {/* Element that stays */}
        </div>
      </div>
    </>
  );
}