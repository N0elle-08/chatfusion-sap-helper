import { useState } from "react";
import ChatButton from "@/components/ChatButton";
import ChatWindow from "@/components/ChatWindow";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-sap-text mb-4">
          SAP CAP Application
        </h1>
        <p className="text-gray-600">
          Your main application content goes here. The chat assistant is available
          in the bottom right corner.
        </p>
      </div>

      <ChatButton
        onClick={() => setIsChatOpen(true)}
        isOpen={isChatOpen}
      />
      <ChatWindow
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
};

export default Index;