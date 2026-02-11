import type { Metadata } from 'next';
import { Assistant, Playfair_Display } from 'next/font/google';
import './globals.css';

const assistant = Assistant({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'MULTIBRAWN - חופשות AI חכמות',
  description: 'העוזרת האישית שלך לצימרים, וילות וחופשות מושלמות בישראל',
  keywords: 'צימרים, וילות, חופשות, AI, Gemini, נופש בישראל',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${assistant.variable} ${playfair.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
