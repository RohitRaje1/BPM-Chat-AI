
import React from 'react';
import { ChatMessage, MessageSender } from '../types';
import BotIcon from './icons/BotIcon';
import UserIcon from './icons/UserIcon';

interface ChatMessageItemProps {
  message: ChatMessage;
}

const ChatMessageItem: React.FC<ChatMessageItemProps> = ({ message }) => {
  const isUser = message.sender === MessageSender.USER;

  // Simple markdown-to-HTML conversion
  const formatText = (text: string) => {
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-100">$1</strong>') // Bold
      .replace(/\n/g, '<br />'); // Newlines
    
    // Convert numbered lists
    formattedText = formattedText.replace(/(\d+\.\s.*?(?=<br \/>|$))+/g, (match) => {
        const items = match.split(/<br \/>/g).filter(item => item.trim() !== '').map(item => `<li class="ml-4">${item.replace(/^\d+\.\s/, '')}</li>`).join('');
        return `<ol class="list-decimal list-inside space-y-1 my-2">${items}</ol>`;
    });

    return { __html: formattedText };
  };

  const containerClasses = isUser ? 'flex items-end justify-end' : 'flex items-end';
  const bubbleClasses = isUser
    ? 'bg-blue-600 text-white rounded-t-lg rounded-bl-lg'
    : 'bg-slate-700 text-slate-200 rounded-t-lg rounded-br-lg';
  const icon = isUser ? <UserIcon /> : <BotIcon />;

  return (
    <div className={containerClasses}>
      {!isUser && <div className="w-8 h-8 mr-3 flex-shrink-0">{icon}</div>}
      <div className={`px-4 py-3 max-w-lg md:max-w-xl shadow-md ${bubbleClasses}`}>
        <p className="text-sm" dangerouslySetInnerHTML={formatText(message.text)} />
      </div>
      {isUser && <div className="w-8 h-8 ml-3 flex-shrink-0">{icon}</div>}
    </div>
  );
};

export default ChatMessageItem;
