import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Paperclip, Bot, User, FileText, ArrowLeft } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useState } from "react";

export default function ChatDetail() {
  const [, params] = useRoute("/chat/:id");
  const chatId = params?.id;

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user",
      text: "次世代基盤開発プロジェクトの現在の進捗状況を教えてください。",
      time: "10:30",
    },
    {
      id: 2,
      sender: "bot",
      text: "はい、プロジェクトの最新状況についてお答えします。\n\n現在、API実装フェーズが80%完了しており、予定通り進行しています。ただし、認証基盤の選定においてAuth0の採用が決定しましたが、PoC環境の構築が12/15までの期限となっており、ここが直近のマイルストーンです。\n\n関連する議事録：「定例進捗会議 #12」\n関連ファイル：「進捗報告資料.pptx」",
      time: "10:31",
      sources: [
        { type: "minutes", title: "定例進捗会議 #12", id: 1 },
        { type: "file", title: "進捗報告資料.pptx", id: 2 },
      ]
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "user", text: input, time: "10:35" }]);
    setInput("");
    
    // Mock bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: "bot",
        text: "申し訳ありません、現在はデモモードのため、これ以上の回答は生成できません。",
        time: "10:35"
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex items-center gap-4 mb-4">
        <Link href="/chat">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-gray-800">次世代基盤開発について</h1>
          <p className="text-sm text-gray-500">プロジェクト: 次世代基盤開発</p>
        </div>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
              <Avatar className={`w-10 h-10 ${msg.sender === "bot" ? "bg-blue-100" : "bg-gray-100"}`}>
                {msg.sender === "bot" ? (
                  <Bot className="w-6 h-6 text-blue-600" />
                ) : (
                  <AvatarFallback><User className="w-6 h-6 text-gray-600" /></AvatarFallback>
                )}
              </Avatar>
              <div className={`max-w-[80%] space-y-2 ${msg.sender === "user" ? "items-end flex flex-col" : ""}`}>
                <div className={`p-4 rounded-lg whitespace-pre-wrap ${
                  msg.sender === "user" 
                    ? "bg-blue-600 text-white rounded-tr-none" 
                    : "bg-gray-100 text-gray-800 rounded-tl-none"
                }`}>
                  {msg.text}
                </div>
                
                {/* Source Citations for Bot */}
                {msg.sender === "bot" && msg.sources && (
                  <div className="flex gap-2 flex-wrap">
                    {msg.sources.map((source, i) => (
                      <Link key={i} href={`/project/1/${source.type === "minutes" ? "meeting" : "file"}/${source.id}`}>
                        <a className="flex items-center gap-1 text-xs bg-white border px-2 py-1 rounded hover:bg-blue-50 text-blue-600 transition-colors">
                          <FileText className="w-3 h-3" />
                          {source.title}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
                <span className="text-xs text-gray-400 block">{msg.time}</span>
              </div>
            </div>
          ))}
        </CardContent>
        <div className="p-4 bg-white border-t">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Paperclip className="w-5 h-5 text-gray-500" />
            </Button>
            <Input 
              placeholder="プロジェクトについて質問する..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
