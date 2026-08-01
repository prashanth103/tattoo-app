import type { ChatIntent, ChatResponseBlock, ChatQuickReply } from "@/types/chatbot";
import chatbotData from "@/data/chatbot-data";
import { CONTACT } from "@/constants/contact";

/**
 * Tokenizes a user message into lowercase words, also
 * preserving common multi-word phrases as single tokens.
 */
function tokenize(message: string): string[] {
  const lower = message.toLowerCase().trim();
  const phrases: string[] = [];

  // Check for multi-word keyword matches first
  for (const intent of chatbotData.intents) {
    for (const kw of intent.keywords) {
      if (kw.includes(" ") && lower.includes(kw)) {
        phrases.push(kw);
      }
    }
  }

  // Single-word tokens
  const words = lower.replace(/[^a-z0-9\s'-]/g, "").split(/\s+/).filter(Boolean);

  return [...phrases, ...words];
}

/**
 * Scores an intent against user tokens.
 * Multi-word matches score higher than single-word matches.
 */
function scoreIntent(intent: ChatIntent, tokens: string[]): number {
  let score = 0;
  for (const kw of intent.keywords) {
    if (kw.includes(" ")) {
      // Multi-word: check if the phrase token exists
      if (tokens.includes(kw)) score += 3;
    } else {
      if (tokens.includes(kw)) score += 1;
    }
  }
  return score;
}

/**
 * Matches a user message against all intents.
 * Returns the best-matching intent, or null for fallback.
 */
export function matchIntent(message: string): ChatIntent | null {
  const tokens = tokenize(message);
  if (tokens.length === 0) return null;

  let bestIntent: ChatIntent | null = null;
  let bestScore = 0;

  for (const intent of chatbotData.intents) {
    const score = scoreIntent(intent, tokens);
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  return bestScore > 0 ? bestIntent : null;
}

/**
 * Picks a random response variant from an intent's responses array.
 */
export function resolveResponse(intent: ChatIntent): {
  blocks: ChatResponseBlock[];
  quickReplies: ChatQuickReply[];
} {
  const variants = intent.responses;
  const blocks = variants[Math.floor(Math.random() * variants.length)];
  const quickReplies = intent.quickReplies ?? [];
  return { blocks, quickReplies };
}

/**
 * Returns a random fallback response.
 */
export function getFallbackResponse(): {
  blocks: ChatResponseBlock[];
  quickReplies: ChatQuickReply[];
} {
  const variants = chatbotData.fallbackResponses;
  const blocks = variants[Math.floor(Math.random() * variants.length)];
  return { blocks, quickReplies: chatbotData.fallbackQuickReplies };
}

/**
 * Returns the welcome message and quick replies.
 */
export function getWelcomeResponse(): {
  blocks: ChatResponseBlock[];
  quickReplies: ChatQuickReply[];
} {
  return {
    blocks: chatbotData.welcomeMessage,
    quickReplies: chatbotData.welcomeQuickReplies,
  };
}

/**
 * Finds an intent by its ID for quick-reply handling.
 */
export function getIntentById(id: string): ChatIntent | null {
  return chatbotData.intents.find((i) => i.id === id) ?? null;
}

/**
 * Builds a WhatsApp URL with a pre-filled message.
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns the bot name from config.
 */
export function getBotName(): string {
  return chatbotData.botName;
}
