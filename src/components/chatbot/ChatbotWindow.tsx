import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Trash2 } from "lucide-react";
import type { ChatMessage as ChatMessageType, ChatQuickReply } from "@/types/chatbot";
import ChatMessage from "./ChatMessage";
import { getBotName } from "@/utils/chatbotEngine";

interface ChatbotWindowProps {
  messages: ChatMessageType[];
  onSendMessage: (text: string) => void;
  onQuickReply: (intentId: string) => void;
  onClearHistory: () => void;
}

export default function ChatbotWindow({
  messages,
  onSendMessage,
  onQuickReply,
  onClearHistory,
}: ChatbotWindowProps) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input);
    setInput("");
  };

  // Get quick replies from the last bot message
  const lastBotMessage = [...messages].reverse().find((m) => m.role === "bot");
  const quickReplies: ChatQuickReply[] = lastBotMessage?.quickReplies ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-24 right-6 z-50 w-[calc(100vw-48px)] sm:w-[400px] max-h-[70vh] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-surface/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-background text-xs font-display font-semibold">S</span>
          </div>
          <div>
            <p className="text-sm font-display font-semibold leading-none">{getBotName()}</p>
            <p className="text-[10px] font-body text-text-muted mt-0.5">Online • Typically replies instantly</p>
          </div>
        </div>
        <button
          onClick={onClearHistory}
          className="p-1.5 rounded-lg hover:bg-card text-text-muted hover:text-text-primary transition-colors"
          aria-label="Clear chat history"
          title="Clear chat"
        >
          <Trash2 size={14} strokeWidth={1.5} />
        </button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-1 min-h-[200px] max-h-[calc(70vh-160px)]"
      >
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
      </div>

      {/* Quick Replies */}
      {quickReplies.length > 0 && (
        <div className="px-4 pb-2 flex flex-wrap gap-1.5">
          {quickReplies.map((qr) => (
            <button
              key={qr.intentId}
              onClick={() => onQuickReply(qr.intentId)}
              className="text-[11px] font-body px-3 py-1.5 rounded-full border border-border bg-surface hover:bg-primary hover:text-background hover:border-primary transition-all duration-200"
            >
              {qr.label}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-4 py-3 border-t border-border bg-surface/50"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-transparent text-sm font-body text-text-primary placeholder:text-text-muted focus:outline-none"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="w-9 h-9 rounded-full bg-primary text-background flex items-center justify-center disabled:opacity-30 hover:bg-secondary transition-colors duration-200"
          aria-label="Send message"
        >
          <Send size={14} strokeWidth={1.5} />
        </button>
      </form>
    </motion.div>
  );
}
