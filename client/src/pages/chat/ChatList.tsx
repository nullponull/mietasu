import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function ChatList() {
  const [, setLocation] = useLocation();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">チャット一覧</h1>
        <Button>新規チャット開始</Button>
      </div>

      <div className="grid gap-4">
        {[
          { project: "次世代基盤開発", topic: "インフラ構成について", lastMsg: "AWSの構成図を更新しました。確認お願いします。", time: "10分前", unread: 2 },
          { project: "マーケティング施策2024", topic: "LPデザイン案", lastMsg: "B案の方向性で進めましょう。", time: "1時間前", unread: 0 },
          { project: "社内DX推進", topic: "ツール導入検討", lastMsg: "来週の定例でデモを行います。", time: "昨日", unread: 0 },
        ].map((chat, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setLocation(`/chat/${i + 1}`)}>
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{chat.topic}</h3>
                    <Badge variant="outline" className="text-xs font-normal">{chat.project}</Badge>
                    {chat.unread > 0 && (
                      <Badge variant="destructive" className="rounded-full px-2 py-0.5 text-[10px]">{chat.unread}</Badge>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-1">{chat.lastMsg}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                    <Clock className="w-3 h-3" />
                    <span>最終更新: {chat.time}</span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
