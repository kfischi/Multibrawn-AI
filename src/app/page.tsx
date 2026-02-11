import Link from "next/link";
import { Button } from "@/components/ui/button";   // יגיע מ-shadcn

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6 bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            חופשה מושלמת – מתוכננת על ידי AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
            דבר עם ערדית – העוזרת החכמה של MULTIBRAWN. היא מבינה אותך, זוכרת העדפות, ומציעה רק את מה שבאמת מתאים.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="text-lg px-10 py-7 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 hover:brightness-110 transition-all shadow-xl">
              דבר עם ערדית עכשיו
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-full border-2">
              גלריית נכסים
            </Button>
          </div>
        </div>
      </section>

      {/* CTA floating chat – נשים בהמשך */}
      <div className="fixed bottom-8 right-8 z-50">
        {/* כאן יגיע הצ'אטבוט בהמשך */}
      </div>
    </main>
  );
}
