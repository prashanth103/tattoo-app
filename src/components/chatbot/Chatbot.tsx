import { AnimatePresence } from "framer-motion";
import useChatbot from "@/hooks/useChatbot";
import ChatbotToggle from "./ChatbotToggle";
import ChatbotWindow from "./ChatbotWindow";

export default function Chatbot() {
  const {
    messages,
    isOpen,
    sendMessage,
    handleQuickReply,
    clearHistory,
    toggleOpen,
  } = useChatbot();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ChatbotWindow
            messages={messages}
            onSendMessage={sendMessage}
            onQuickReply={handleQuickReply}
            onClearHistory={clearHistory}
          />
        )}
      </AnimatePresence>
      <ChatbotToggle isOpen={isOpen} onClick={toggleOpen} />
    </>
  );
}
