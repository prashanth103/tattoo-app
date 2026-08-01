// ── Response block types ─────────────────────────────────────────────

export interface TextResponse {
  type: "text";
  content: string;
}

export interface ListResponse {
  type: "list";
  title: string;
  items: string[];
}

export interface LinkResponse {
  type: "link";
  label: string;
  url: string;
  external?: boolean;
}

export interface ButtonResponse {
  type: "button";
  label: string;
  action: "whatsapp" | "call" | "navigate";
  value: string;
}

export interface ImageResponse {
  type: "image";
  src: string;
  alt: string;
}

export type ChatResponseBlock =
  | TextResponse
  | ListResponse
  | LinkResponse
  | ButtonResponse
  | ImageResponse;

// ── Quick replies ────────────────────────────────────────────────────

export interface ChatQuickReply {
  label: string;
  intentId: string;
}

// ── Intent ───────────────────────────────────────────────────────────

export interface ChatIntent {
  id: string;
  keywords: string[];
  responses: ChatResponseBlock[][];   // outer array = variants, inner = blocks
  quickReplies?: ChatQuickReply[];
}

// ── Message (stored in state / localStorage) ─────────────────────────

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  blocks: ChatResponseBlock[];
  quickReplies?: ChatQuickReply[];
  timestamp: number;
}

// ── Top-level data shape ─────────────────────────────────────────────

export interface ChatbotConfig {
  botName: string;
  welcomeMessage: ChatResponseBlock[];
  welcomeQuickReplies: ChatQuickReply[];
  fallbackResponses: ChatResponseBlock[][];
  fallbackQuickReplies: ChatQuickReply[];
  intents: ChatIntent[];
}
