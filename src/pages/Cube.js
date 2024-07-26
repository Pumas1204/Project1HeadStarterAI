import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Cube({ position, color, text, path }) {
  const mesh = useRef();
  const labelRef = useRef();
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Set initial off-screen position
    gsap.set(mesh.current.position, { x: position[0], y: position[1] + 10, z: position[2] });

    // Animate to final position with a 7-second delay
    gsap.to(mesh.current.position, {
      delay: 5, // 7-second delay before animation starts
      duration: 2,
      x: position[0],
      y: position[1],
      z: position[2],
      ease: "power3.out",
      onComplete: () => {
        console.log('Cube animation complete');
      }
    });

    // Add fade-in class after a delay of 7 seconds
    setTimeout(() => {
      if (labelRef.current) {
        labelRef.current.classList.add('fade-in');
        console.log('Fade-in class added to label:', labelRef.current);
      }
    }, 7000); // 7 seconds
  }, [position]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  const handleClick = () => {
    navigate(path); // Navigate to the specified path when the text is clicked
  };

  return (
    <group ref={mesh}>
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial color={color} />
      </lineSegments>
      <Html position={[0, 0, 0]} center>
        <p
          ref={labelRef}
          className="cube-label"
          style={{ color: color, margin: 0, fontSize: '2.5rem', cursor: 'pointer' }}
          onClick={handleClick} // Add click event handler
        >
          {text}
        </p>
      </Html>
    </group>
  );
}

export default Cube;