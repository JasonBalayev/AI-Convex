// src/components/ParticleBackground.jsx

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = async (main) => {
    // Loads the tsparticles package bundle, which includes all features
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // You can use this callback to perform actions once particles are loaded
    // console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#1a202c", // Match your dark background
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push", // Adds more particles on click
            },
            onHover: {
              enable: true,
              mode: "repulse", // Repulses particles on hover
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", // White particles for contrast
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50, // Adjust the number of particles
          },
          opacity: {
            value: 0.2, // Lower opacity for subtlety
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 }, // Varying sizes for depth
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}
