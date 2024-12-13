import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  return (
    <Button
      className={`fixed bottom-4 right-4 w-14 h-14 rounded-full bg-sap-blue hover:bg-sap-accent transition-all duration-300 shadow-lg ${
        isOpen ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"
      }`}
      onClick={onClick}
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default ChatButton;