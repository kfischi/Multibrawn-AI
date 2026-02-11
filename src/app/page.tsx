"use client"

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Home, Calendar, Users, Star, MessageCircle } from "lucide-react";
import ChatBot from "@/components/ChatBot/ChatBot";

export default function HomePage() {
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
      <main ref={containerRef} className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* Mouse glow follower */}
        <motion.div
          className="pointer-events-none fixed z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-cyan-400/20 via-purple-500/10 to-transparent blur-3xl"
          style={{ left: springX, top: springY }}
        />

        {/* Parallax background */}
        <motion.div
          className="fixed inset-0 z-0 bg-gradient-to-br from-indigo-950/70 via-purple-950/50 to-black"
          style={{ y: bgY }}
        />

        {/* Hero Section */}
        <section className="relative z-20 flex min-h-screen items-center justify-center px-6">
          <div className="mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-6 py-3 backdrop-blur-sm border border-cyan-500/20">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-300">
                  המקום המושלם לחופשה שלכם
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6 text-6xl font-bold leading-tight md:text-8xl"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                MULTIBRAWN
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mb-12 max-w-3xl text-xl text-gray-300 md:text-2xl"
            >
              צימרים, וילות ומתחמי אירועים יוקרתיים בישראל.
              <br />
              9 שנות ניסיון, 29+ מתחמים מדהימים, שירות מעולה.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  גלה את המתחמים
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500/50 bg-black/50 text-lg font-bold text-cyan-300 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 ml-2" />
                דבר עם ערדית
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-20 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center text-4xl font-bold md:text-5xl"
            >
              למה <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">MULTIBRAWN</span>?
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Home,
                  title: "29+ מתחמים",
                  description: "מגוון עצום של צימרים, וילות ומתחמי אירועים",
                  color: "from-cyan-400 to-blue-500"
                },
                {
                  icon: Calendar,
                  title: "9 שנות ניסיון",
                  description: "מומחים בתחום האירוח והאירועים",
                  color: "from-purple-400 to-pink-500"
                },
                {
                  icon: Users,
                  title: "שירות אישי",
                  description: "ליווי מקצועי ואישי לכל אורך הדרך",
                  color: "from-pink-400 to-red-500"
                },
                {
                  icon: Star,
                  title: "איכות מעולה",
                  description: "רק מתחמים שעברו בדיקה קפדנית",
                  color: "from-yellow-400 to-orange-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/20 hover:bg-white/10"
                >
                  <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${feature.color} p-4`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-20" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-20 px-6 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 p-12 text-center backdrop-blur-sm"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              מוכנים למצוא את המקום המושלם? 🌟
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              דברו עם ערדית, הצ'אטבוט החכם שלנו, ותקבלו המלצה מותאמת אישית
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-xl font-bold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <MessageCircle className="h-6 w-6 ml-2" />
              התחל שיחה עכשיו
            </Button>
          </motion.div>
        </section>

        {/* ChatBot */}
        <ChatBot />
      </main>
    </>
  );
}
