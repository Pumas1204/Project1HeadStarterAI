import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesComponent = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 10
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 5
          },
          move: {
            enable: true,
            speed: 1
          }
        },
        retina_detect: true
      }}
      style={{ border: '1px solid red' }}
    />
  );
};

export default ParticlesComponent;