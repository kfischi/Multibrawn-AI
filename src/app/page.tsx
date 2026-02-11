import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ChatBot from "@/components/ChatBot/ChatBot"; // ← ודא שהקובץ הזה קיים

export const metadata = {
  title: "MULTIBRAWN AI – חופשות חכמות עם ערדית",
  description:
    "העוזרת האישית שלך למציאת צימרים, וילות ומתחמי אירועים מושלמים בישראל – מבוסס Gemini AI מתקדם",
  openGraph: {
    title: "MULTIBRAWN AI – תכנון חופשה חכם",
    description: "דבר עם ערדית ותקבלי המלצות מדויקות בזמן אמת",
    images: ["/og-image.jpg"], // ← שים תמונה אמיתית אם יש
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Background subtle pattern / gradient blobs – אפשר להרחיב */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-5 py-2 text-sm font-medium text-cyan-700 dark:text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Powered by Gemini AI
            </div>

            <h1 className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl lg:text-8xl">
              חופשה מושלמת
              <br />
              <span className="text-4xl md:text-6xl">מתוכננת על ידי AI</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-700 md:text-2xl dark:text-slate-300">
              דבר/י עם <strong>ערדית</strong> – העוזרת החכמה של MULTIBRAWN.
              <br className="hidden sm:block" />
              היא מבינה אותך, זוכרת העדפות ומציעה רק את מה שבאמת מתאים לך.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button
                size="lg"
                className="group h-14 min-w-[260px] rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-10 text-lg font-semibold shadow-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-100"
                asChild
              >
                <Link href="#chat" scroll={false}>
                  דבר/י עם ערדית עכשיו
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 min-w-[260px] rounded-full border-2 border-slate-300 text-lg font-semibold transition-all hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                asChild
              >
                <Link href="/gallery">גלריית נכסים</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* הצ'אטבוט הצף – מופיע תמיד */}
      <ChatBot />

      {/* כפתור וואטסאפ צף – אופציונלי אם הצ'אטבוט כבר קיים */}
      {/* <WhatsAppButton /> */}
    </main>
  );
}
