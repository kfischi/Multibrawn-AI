"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type Message = {
  role: "user" | "assistant"
  content: string
  isLoading?: boolean
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMsg: Message = { role: "user", content: input.trim() }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setIsLoading(true)

    // הודעת "כותב..." זמנית
    setMessages(prev => [...prev, { role: "assistant", content: "", isLoading: true }])

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      })

      if (!res.ok) throw new Error("שגיאה בשרת")

      const data = await res.json()
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: "assistant", content: data.response || "אוקיי! איך אני יכולה לעזור?" },
      ])
    } catch (err) {
      console.error(err)
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: "assistant", content: "מצטערת, קרתה תקלה... נסי שוב?" },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[480px] rounded-2xl shadow-2xl border border-white/10 bg-black/70 backdrop-blur-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-purple-700 p-4 flex items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-white/30">
          <AvatarFallback className="bg-white/10 text-white font-bold">ע</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">ערדית AI</h3>
          <p className="text-xs opacity-80">מחפשת לך חופשה מושלמת</p>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 space-y-4">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center text-slate-400">
            <p className="text-lg font-medium">היי! איך אני יכולה לעזור לך?</p>
            <p className="text-sm mt-2 opacity-80">
              לדוגמה: "צימר רומנטי בצפון עם בריכה מחוממת"
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              "flex gap-3 max-w-[85%]",
              msg.role === "user" ? "ml-auto justify-end" : ""
            )}
          >
            {msg.role === "assistant" && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-600 text-white">ע</AvatarFallback>
              </Avatar>
            )}

            <div
              className={cn(
                "rounded-2xl px-4 py-3 text-sm",
                msg.role === "user"
                  ? "bg-cyan-600/90 text-white rounded-tr-none"
                  : "bg-white/10 text-slate-100 rounded-tl-none backdrop-blur-sm border border-white/5"
              )}
            >
              {msg.isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  כותבת...
                </div>
              ) : (
                msg.content
              )}
            </div>

            {msg.role === "user" && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-slate-700">את</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </ScrollArea>

      {/* Input */}
      <div className="border-t border-white/10 p-4 bg-black/40">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
            placeholder="כתוב כאן מה אתה מחפש..."
            disabled={isLoading}
            className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus-visible:ring-cyan-500"
          />
          <Button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            size="icon"
            className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
