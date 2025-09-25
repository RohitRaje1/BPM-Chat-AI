
import React, { useState, useEffect, useCallback } from 'react';
import { ChatMessage, MessageSender } from './types';
import { INITIAL_BOT_MESSAGE, BOT_NAME, SERVICE_ID_REGEX } from './constants';
import { getProcessData } from './services/bpmService';
import { getResponse } from './services/geminiService';
import ChatWindow from './components/ChatWindow';
import ResponsibleAIPanel from './components/ResponsibleAIPanel';

const App: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMessages([
      {
        id: Date.now(),
        text: INITIAL_BOT_MESSAGE,
        sender: MessageSender.BOT,
        senderName: BOT_NAME,
      },
    ]);
  }, []);

  const handleSendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text,
      sender: MessageSender.USER,
      senderName: 'You',
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const serviceIdMatch = text.match(SERVICE_ID_REGEX);
      const serviceId = serviceIdMatch ? serviceIdMatch[0] : null;
      const processData = serviceId ? getProcessData(serviceId) : null;
      
      const aiResponseText = await getResponse(text, processData);

      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: aiResponseText,
        sender: MessageSender.BOT,
        senderName: BOT_NAME,
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        text: "Sorry, I encountered an error. Please try again later.",
        sender: MessageSender.BOT,
        senderName: BOT_NAME,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex h-screen font-sans bg-slate-900 text-slate-200">
      <div className="flex-1 flex flex-col max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
         <header className="mb-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
              BPM Process AI Assistant
            </h1>
            <p className="text-slate-400 mt-1">Your intelligent partner for process management</p>
        </header>
        <ChatWindow messages={messages} onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
      <aside className="hidden lg:block w-96 bg-slate-950/50 border-l border-slate-700/50 p-6">
        <ResponsibleAIPanel />
      </aside>
    </div>
  );
};

export default App;
