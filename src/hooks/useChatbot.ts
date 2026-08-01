import { useState, useEffect, useCallback, useRef } from "react";
import type { ChatMessage } from "@/types/chatbot";
import {
  matchIntent,
  resolveResponse,
  getFallbackResponse,
  getWelcomeResponse,
  getIntentById,
} from "@/utils/chatbotEngine";

const STORAGE_KEY = "samava-chatbot-history";

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function loadMessages(): ChatMessage[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // Corrupted data — reset
  }
  return [];
}

function saveMessages(messages: ChatMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    // Storage full or unavailable — silently fail
  }
}

export default function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>(loadMessages);
  const [isOpen, setIsOpen] = useState(false);
  const hasInitialized = useRef(false);

  // Persist messages to localStorage on change
  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  // Show welcome message on first ever open
  useEffect(() => {
    if (isOpen && !hasInitialized.current && messages.length === 0) {
      hasInitialized.current = true;
      const { blocks, quickReplies } = getWelcomeResponse();
      setMessages([
        {
          id: generateId(),
          role: "bot",
          blocks,
          quickReplies,
          timestamp: Date.now(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  const sendMessage = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: generateId(),
      role: "user",
      blocks: [{ type: "text", content: trimmed }],
      timestamp: Date.now(),
    };

    // Match intent
    const intent = matchIntent(trimmed);
    let botBlocks;
    let botQuickReplies;

    if (intent) {
      const resolved = resolveResponse(intent);
      botBlocks = resolved.blocks;
      botQuickReplies = resolved.quickReplies;
    } else {
      const fallback = getFallbackResponse();
      botBlocks = fallback.blocks;
      botQuickReplies = fallback.quickReplies;
    }

    const botMessage: ChatMessage = {
      id: generateId(),
      role: "bot",
      blocks: botBlocks,
      quickReplies: botQuickReplies,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  }, []);

  const handleQuickReply = useCallback((intentId: string) => {
    const intent = getIntentById(intentId);
    if (!intent) return;

    const resolved = resolveResponse(intent);

    // Add the quick reply label as a user message
    const label = intent.id.replace(/-/g, " ");
    const userMessage: ChatMessage = {
      id: generateId(),
      role: "user",
      blocks: [{ type: "text", content: label.charAt(0).toUpperCase() + label.slice(1) }],
      timestamp: Date.now(),
    };

    const botMessage: ChatMessage = {
      id: generateId(),
      role: "bot",
      blocks: resolved.blocks,
      quickReplies: resolved.quickReplies,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  }, []);

  const clearHistory = useCallback(() => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
    hasInitialized.current = false;
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    messages,
    isOpen,
    sendMessage,
    handleQuickReply,
    clearHistory,
    toggleOpen,
  };
}
