"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
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
      <ParticlesBackground />

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
          <div className="max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-2xl">
                <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-cyan-300">Gemini 2.0 • Real-time Intelligence</span>
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
                <span className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  חופשה
                </span>
                <span className="block mt-2 bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  שלא תשכח
                </span>
              </h1>

              <p className="mt-10 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                ערדית – העוזרת שמבינה אותך באמת.<br />
                תכנון אישי, זמינות בזמן אמת, המלצות מדויקות.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="group h-16 px-10 text-lg font-semibold rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById("chatbot-trigger")?.click()}
                >
                  דבר עם ערדית עכשיו
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 text-lg rounded-2xl border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all"
                  asChild
                >
                  <Link href="/gallery">גלריית נכסים</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ChatBot – מזהה ID כדי שנוכל לגלול אליו */}
        <div id="chatbot-trigger" className="sr-only" />
        <ChatBot />
      </main>
    </>
  );
}
