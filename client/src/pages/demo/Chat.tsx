import { Send, Bot, User } from "lucide-react";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'こんにちは。社内ナレッジベース「みえタス」です。何かお探しですか？' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessages = [
      ...messages,
      { role: 'user', content: input }
    ];
    setMessages(newMessages);
    setInput('');

    // Mock response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: '申し訳ありません。これはデモ画面のため、実際のAI応答は行われません。製品版では、社内ドキュメントに基づいた回答が生成されます。' }
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <h1 className="text-2xl font-bold mb-4">AIチャット</h1>
      
      <div className="flex-1 bg-white rounded-lg border shadow-sm overflow-hidden flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'assistant' ? 'bg-primary text-white' : 'bg-slate-200'
              }`}>
                {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />}
              </div>
              <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                msg.role === 'assistant' 
                  ? 'bg-slate-100 text-slate-800 rounded-tl-none' 
                  : 'bg-primary text-white rounded-tr-none'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t bg-slate-50">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="質問を入力してください..." 
              className="flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
              onClick={handleSend}
              className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
          <div className="text-xs text-center text-muted-foreground mt-2">
            ※デモ環境のため、実際のデータにはアクセスしません
          </div>
        </div>
      </div>
    </div>
  );
}
