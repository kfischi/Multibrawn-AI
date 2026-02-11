import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageCircleHeart } from "lucide-react";
import { motion } from "framer-motion";
import ChatBot from "@/components/ChatBot/ChatBot"; // ודא שהקובץ קיים

export const metadata = {
  title: "MULTIBRAWN AI – חופשות חכמות עם ערדית",
  description:
    "העוזרת האישית שלך למציאת צימרים, וילות ומתחמי אירועים מושלמים בישראל – מבוסס Gemini AI מתקדם. תכנון אישי, זמינות בזמן אמת, המלצות מדויקות.",
  keywords: [
    "צימרים", "וילות", "חופשות בישראל", "AI חופשות", "ערדית AI", "צימרים עם בריכה", "וילות למשפחות", "מתחמי אירועים",
  ],
  openGraph: {
    title: "MULTIBRAWN AI – תכנון חופשה חכם עם ערדית",
    description: "דבר/י עם ערדית ותקבלי המלצות מדויקות בזמן אמת – צימרים, וילות, אירועים.",
    url: "https://your-domain.com",
    siteName: "MULTIBRAWN AI",
    images: [
      {
        url: "/og-hero.jpg", // ← שים תמונה אמיתית 1200×630
        width: 1200,
        height: 630,
        alt: "ערדית – העוזרת החכמה של MULTIBRAWN",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MULTIBRAWN AI – חופשות חכמות",
    description: "העוזרת האישית שלך – Gemini AI שמתכננת חופשה מושלמת.",
    images: ["/og-hero.jpg"],
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-black">
      {/* רקע עדין עם blobs + parallax light */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <motion.div
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-10 bottom-40 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-16 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500/15 to-purple-500/15 px-5 py-2 text-sm font-medium text-cyan-700 backdrop-blur-sm dark:from-cyan-400/20 dark:to-purple-400/20 dark:text-cyan-300">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Powered by Gemini 1.5 / 2.0 Flash
            </div>

            <h1 className="bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
              חופשה מושלמת
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-5 text-2xl font-medium text-slate-700 md:text-3xl lg:text-4xl dark:text-slate-200"
            >
              <span className="inline-block">מתוכננת על ידי</span>{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                ערדית AI
              </span>
            </motion.p>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-300">
              דבר/י עם ערדית – העוזרת האישית החכמה של MULTIBRAWN.  
              היא מבינה אותך לעומק, זוכרת העדפות, בודקת זמינות בזמן אמת ומציעה רק את מה שבאמת מתאים לך.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                className="group relative h-14 min-w-[280px] overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 px-10 text-lg font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] active:scale-100"
                asChild
              >
                <Link href="#chat" scroll={false}>
                  דבר/י עם ערדית עכשיו
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-0" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 min-w-[260px] rounded-full border-2 border-slate-300 text-lg font-semibold text-slate-800 transition-all hover:bg-slate-100 hover:text-slate-900 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                asChild
              >
                <Link href="/gallery">
                  גלריית נכסים מאומתים
                </Link>
              </Button>
            </div>

            {/* Trust signals / social proof קטן */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <span>500+ חופשות מוצלחות</span>
              <span>•</span>
              <span>100% נכסים מאומתים</span>
              <span>•</span>
              <span>תמיכה 24/7 בעברית</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* הצ'אטבוט הצף – תמיד זמין */}
      <ChatBot />

      {/* Optional: כפתור וואטסאפ צף – אם רוצים גיבוי */}
      {/* <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl"
          asChild
        >
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=היי! הגעתי מהאתר – אשמח לעזרה בחיפוש חופשה`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="צור קשר בוואטסאפ"
          >
            <MessageCircleHeart className="h-7 w-7" />
          </a>
        </Button>
      </div> */}
    </main>
  );
}
