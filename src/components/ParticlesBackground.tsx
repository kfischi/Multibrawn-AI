// src/components/ParticlesBackground.tsx
'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800, // ✅ FIXED: Changed from "area" to "value_area"
            },
          },
          color: {
            value: ["#00d4ff", "#7c3aed", "#ff4b8c"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00d4ff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
