import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/254725429179?text=Hello%20Jume%20College%2C%20I%27d%20like%20to%20learn%20more"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="hidden sm:inline font-body font-semibold text-sm">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
