"use client";

import { MessageCircle } from "lucide-react";

const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "972523983394";

export default function WhatsAppButton() {
  const handleClick = () => {
    const text = encodeURIComponent("היי! הגעתי מהאתר multibrawn-ai – אשמח לעזרה בחיפוש חופשה");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
      aria-label="צור קשר בוואטסאפ"
    >
      <MessageCircle size={32} />
    </button>
  );
}
