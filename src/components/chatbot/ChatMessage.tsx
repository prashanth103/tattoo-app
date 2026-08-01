import { useNavigate } from "react-router-dom";
import type { ChatMessage as ChatMessageType, ChatResponseBlock } from "@/types/chatbot";
import { buildWhatsAppUrl } from "@/utils/chatbotEngine";

function ResponseBlock({ block }: { block: ChatResponseBlock }) {
  const navigate = useNavigate();

  switch (block.type) {
    case "text":
      return (
        <p className="text-sm font-body leading-relaxed whitespace-pre-line">
          {block.content}
        </p>
      );

    case "list":
      return (
        <div className="space-y-2">
          <p className="text-xs font-body font-medium uppercase tracking-widest text-text-muted">
            {block.title}
          </p>
          <ul className="space-y-1.5">
            {block.items.map((item, i) => (
              <li key={i} className="text-sm font-body leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "link":
      if (block.external) {
        return (
          <a
            href={block.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-body font-medium text-primary underline underline-offset-2 hover:no-underline transition-colors"
          >
            {block.label}
          </a>
        );
      }
      return (
        <button
          onClick={() => navigate(block.url)}
          className="inline-flex items-center gap-1.5 text-sm font-body font-medium text-primary underline underline-offset-2 hover:no-underline transition-colors"
        >
          {block.label}
        </button>
      );

    case "button": {
      const handleClick = () => {
        if (block.action === "whatsapp") {
          window.open(buildWhatsAppUrl(block.value), "_blank");
        } else if (block.action === "call") {
          window.open(block.value, "_self");
        } else if (block.action === "navigate") {
          navigate(block.value);
        }
      };
      return (
        <button
          onClick={handleClick}
          className="w-full text-center text-xs font-body font-medium tracking-wide uppercase px-4 py-2.5 rounded-lg border border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-background transition-all duration-300"
        >
          {block.label}
        </button>
      );
    }

    case "image":
      return (
        <img
          src={block.src}
          alt={block.alt}
          className="w-full rounded-lg object-cover max-h-40"
          loading="lazy"
        />
      );

    default:
      return null;
  }
}

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === "bot";

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-3`}>
      <div
        className={`max-w-[85%] space-y-2.5 px-4 py-3 rounded-2xl text-sm ${
          isBot
            ? "bg-surface border border-border rounded-bl-sm text-text-primary"
            : "bg-primary text-background rounded-br-sm"
        }`}
      >
        {message.blocks.map((block, i) => (
          <ResponseBlock key={i} block={block} />
        ))}
      </div>
    </div>
  );
}
