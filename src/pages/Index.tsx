import { useState } from "react";
import ChatButton from "@/components/ChatButton";
import ChatWindow from "@/components/ChatWindow";
import { Card } from "@/components/ui/card";
import { AppWindow, FileText, Settings, Users } from "lucide-react";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const tiles = [
    {
      title: "My Applications",
      icon: <AppWindow className="h-8 w-8 text-sap-blue" />,
      description: "Access and manage your applications",
    },
    {
      title: "Reports",
      icon: <FileText className="h-8 w-8 text-sap-blue" />,
      description: "View and generate reports",
    },
    {
      title: "User Management",
      icon: <Users className="h-8 w-8 text-sap-blue" />,
      description: "Manage users and permissions",
    },
    {
      title: "Settings",
      icon: <Settings className="h-8 w-8 text-sap-blue" />,
      description: "Configure system settings",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-sap-blue text-white p-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">SAP Fiori Launchpad</h1>
            <div className="flex items-center gap-4">
              <button className="hover:bg-sap-accent/20 p-2 rounded-full transition-colors">
                <Settings className="h-6 w-6" />
              </button>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-sap-text mb-2">My Home</h2>
          <p className="text-gray-600">Welcome to your SAP Fiori launchpad</p>
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tiles.map((tile, index) => (
            <Card
              key={index}
              className="p-6 cursor-pointer hover:shadow-lg transition-shadow group"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                  {tile.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sap-text mb-1">{tile.title}</h3>
                  <p className="text-sm text-gray-600">{tile.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-sap-border p-4">
        <div className="container mx-auto">
          <p className="text-sm text-gray-600 text-center">
            © 2024 SAP SE or an SAP affiliate company. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Chat Integration */}
      <ChatButton onClick={() => setIsChatOpen(true)} isOpen={isChatOpen} />
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;