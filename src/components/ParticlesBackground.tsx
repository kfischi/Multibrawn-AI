"use client"

import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine } from "@tsparticles/engine"

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: {
            value: 40,
            density: { enable: true, area: 800 },   // ← התיקון כאן – value_area → area
          },
          color: { value: ["#00d4ff", "#7c3aed", "#ec4899", "#ffffff"] },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
          size: { value: 2.5, random: true, anim: { enable: true, speed: 2, size_min: 0.3 } },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            attract: { enable: false },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 180, line_linked: { opacity: 0.35 } },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
        background: { color: "transparent" },
      }}
      className="fixed inset-0 pointer-events-none z-[-1]"
    />
  )
}
