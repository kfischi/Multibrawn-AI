"use client"

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
// import ParticlesBackground from "@/components/ParticlesBackground";  ← מוער
import ChatBot from "@/components/ChatBot/ChatBot";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 40, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 200 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* <ParticlesBackground />  ← מוער זמנית */}
      <main ref={containerRef} className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* Mouse glow follower */}
        <motion.div
          className="pointer-events-none fixed z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-cyan-400/20 via-purple-500/10 to-transparent blur-3xl"
          style={{ left: springX, top: springY }}
        />
        {/* Parallax background layers */}
        <motion.div
          className="fixed inset-0 z-0 bg-gradient-to-br from-indigo-950/70 via-purple-950/50 to-black"
          style={{ y: bgY }}
        />
        {/* Hero */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6">
          {/* ... שאר ה-hero בלי שינוי ... */}
        </div>

        {/* ChatBot */}
        <div id="chatbot-trigger" className="sr-only" />
        <ChatBot />
      </main>
    </>
  );
}
