import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

interface ChatbotToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatbotToggle({ isOpen, onClick }: ChatbotToggleProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-background flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? (
          <X size={22} strokeWidth={1.5} />
        ) : (
          <>
            <MessageCircle size={22} strokeWidth={1.5} />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-primary" />
          </>
        )}
      </motion.div>
    </motion.button>
  );
}
