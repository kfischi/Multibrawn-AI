import type { Metadata } from "next";
import { Assistant, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MULTIBRAWN AI – חופשות חכמות עם ערדית",
  description: "העוזרת האישית שלך למציאת הצימר / וילה / מתחם האירועים המושלם – מבוסס AI מתקדם",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body
        className={`${assistant.variable} ${playfair.variable} antialiased bg-gradient-to-b from-gray-50 to-white min-h-screen`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
