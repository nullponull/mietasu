import React, { useState } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  Paperclip, 
  MoreHorizontal,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RefreshCw
} from 'lucide-react';

import DemoLayout from '../../components/DemoLayout';

const Chat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      content: 'こんにちは！みえタスのAIアシスタントです。\n社内のナレッジベースから回答します。何か知りたいことはありますか？',
      timestamp: '10:00'
    }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // User message
    const userMsg = {
      id: messages.length + 1,
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMsg]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMsg = {
        id: messages.length + 2,
        role: 'bot',
        content: '申し訳ありません。これはデモ環境のため、実際のAI回答は生成されません。\n製品版では、社内のナレッジベース（議事録、ドキュメント、チャットログなど）を横断的に検索し、的確な回答を生成します。',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <DemoLayout title="AIチャット">
      <div className="h-[calc(100vh-140px)] flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <Bot size={24} />
          </div>
          <div>
            <div className="font-bold text-gray-900">みえタス AI</div>
            <div className="text-xs text-green-600 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Online (Local Model)
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-6">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'}`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            
            <div className={`max-w-[70%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
              <div className={`p-4 rounded-lg shadow-sm text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === 'user' 
                  ? 'bg-gray-800 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
              
              <div className="flex items-center gap-2 mt-1 px-1">
                <span className="text-xs text-gray-400">{msg.timestamp}</span>
                {msg.role === 'bot' && (
                  <div className="flex gap-2 ml-2">
                    <button className="text-gray-400 hover:text-gray-600"><ThumbsUp size={12} /></button>
                    <button className="text-gray-400 hover:text-gray-600"><ThumbsDown size={12} /></button>
                    <button className="text-gray-400 hover:text-gray-600"><Copy size={12} /></button>
                    <button className="text-gray-400 hover:text-gray-600"><RefreshCw size={12} /></button>
                  </div>
                )}
              </div>

              {msg.role === 'bot' && msg.id === 1 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  <button 
                    className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-600 hover:bg-gray-50 hover:border-blue-300 transition-colors"
                    onClick={() => setInput('最新の議事録を要約して')}
                  >
                    最新の議事録を要約して
                  </button>
                  <button 
                    className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-600 hover:bg-gray-50 hover:border-blue-300 transition-colors"
                    onClick={() => setInput('プロジェクトAの進捗状況は？')}
                  >
                    プロジェクトAの進捗状況は？
                  </button>
                  <button 
                    className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-600 hover:bg-gray-50 hover:border-blue-300 transition-colors"
                    onClick={() => setInput('就業規則について教えて')}
                  >
                    就業規則について教えて
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="メッセージを入力..."
            className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none h-[52px] max-h-[150px]"
          />
          <div className="absolute right-2 bottom-2 flex items-center gap-1">
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <Paperclip size={18} />
            </button>
            <button 
              onClick={handleSend}
              disabled={!input.trim()}
              className={`p-2 rounded-full ${input.trim() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400'}`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
        <div className="text-center mt-2">
          <p className="text-xs text-gray-400">
            AIは不正確な情報を生成する可能性があります。重要な情報は元のソースを確認してください。
          </p>
        </div>
      </div>
      </div>
    </DemoLayout>
  );
};

export default Chat;
