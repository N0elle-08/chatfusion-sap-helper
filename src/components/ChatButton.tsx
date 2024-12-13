import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  return (
    <Button
      className={`fixed bottom-4 right-4 rounded-full p-4 bg-sap-blue hover:bg-sap-accent transition-colors duration-200 shadow-lg ${
        isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      onClick={onClick}
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default ChatButton;