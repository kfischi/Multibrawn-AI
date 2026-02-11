// src/components/ParticlesBackground.tsx
'use client';

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded", container);
  };

  const options: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          width: 800,
          height: 800,
        },
      },
      color: {
        value: ["#00d4ff", "#7c3aed", "#ff4b8c"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 5 },
        animation: {
          enable: true,
          speed: 2,
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
        resize: {
          enable: true,
        },
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
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}
