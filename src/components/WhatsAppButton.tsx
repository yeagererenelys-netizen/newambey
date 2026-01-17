import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/9636420602";

interface WhatsAppButtonProps {
  variant?: "floating" | "inline" | "icon-only";
  className?: string;
}

const WhatsAppButton = ({ variant = "inline", className = "" }: WhatsAppButtonProps) => {
  if (variant === "floating") {
    return (
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20BD5A] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    );
  }

  if (variant === "icon-only") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#20BD5A] transition-colors ${className}`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-white" />
      </a>
    );
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#20BD5A] transition-colors ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      Contact Us on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
