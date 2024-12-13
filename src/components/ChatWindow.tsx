import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindow = ({ isOpen, onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Here you would typically make an API call to your SAP CAP backend
      // For now, we'll simulate a response
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thank you for your message. This is a demo response from the SAP chatbot.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 w-[400px] h-[600px] bg-white rounded-lg shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-sap-border bg-sap-blue rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <h2 className="text-lg font-semibold text-white">SAP Assistant</h2>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-sap-accent/20"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                message.sender === "user"
                  ? "bg-sap-blue text-white"
                  : "bg-white text-sap-text"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-sap-text p-3 rounded-2xl shadow-sm animate-pulse">
              Typing...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-sap-border bg-white rounded-b-lg">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 focus-visible:ring-sap-blue"
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-sap-blue hover:bg-sap-accent transition-colors"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;