import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Bell, User, StickyNote, X, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function MainDashboard() {
  const [notes, setNotes] = useState([
    { id: 1, content: "次回の定例\n12/20 14:00〜\n場所: 会議室A\n※資料準備必須", color: "bg-yellow-50 border-yellow-200", rotate: "rotate-1" },
    { id: 2, content: "TODO\n・API仕様書の確認\n・デザインレビュー\n・週報の提出", color: "bg-blue-50 border-blue-200", rotate: "-rotate-1" },
    { id: 3, content: "チャット引用\n\"認証基盤はAuth0を採用する方向で...\"\n- 田中 (昨日)", color: "bg-pink-50 border-pink-200", rotate: "rotate-2", type: "quote" },
  ]);

  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (!newNote.trim()) return;
    const colors = ["bg-yellow-50 border-yellow-200", "bg-blue-50 border-blue-200", "bg-green-50 border-green-200"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRotate = `rotate-${Math.floor(Math.random() * 3) - 1}`;
    setNotes([...notes, { id: Date.now(), content: newNote, color: randomColor, rotate: randomRotate }]);
    setNewNote("");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">ダッシュボード</h1>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="px-3 py-1 text-sm">
            <User className="w-4 h-4 mr-2" />
            現在のロール: <span className="font-bold ml-1">システム管理者</span>
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Notifications */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Bell className="w-5 h-5 mr-2 text-blue-500" />
              お知らせ
            </CardTitle>
            <Badge variant="secondary">3件の未読</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "2024-03-15 14:30", title: "「次世代基盤開発」に新しい議事録が追加されました", type: "更新" },
                { date: "2024-03-15 11:20", title: "「マーケティング施策2024」のファイル「Q1計画書.pdf」が更新されました", type: "更新" },
                { date: "2024-03-14 18:00", title: "「社内DX推進」のメンバーに田中さんが追加されました", type: "通知" },
                { date: "2024-03-14 09:15", title: "「次世代基盤開発」のAI要約が完了しました", type: "完了" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors border-b last:border-0">
                  <div className="min-w-[100px] text-sm text-gray-500">{item.date}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={item.type === "更新" ? "default" : item.type === "完了" ? "outline" : "secondary"} className="text-xs">
                        {item.type}
                      </Badge>
                      <span className="font-medium text-gray-900">{item.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sticky Notes */}
        <Card className="md:col-span-1 row-span-2 bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <StickyNote className="w-5 h-5 text-yellow-500" />
              付箋メモ
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-xs text-gray-500" onClick={() => document.getElementById('note-input')?.focus()}>
              <Plus className="w-3 h-3 mr-1" />
              追加
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Textarea 
                id="note-input"
                placeholder="新しいメモ..." 
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="min-h-[80px] bg-white"
              />
              <Button size="icon" onClick={addNote} className="h-auto">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 max-h-[500px] overflow-y-auto pr-2 pt-2">
              {notes.map((note) => (
                <div 
                  key={note.id} 
                  className={`${note.color} p-4 rounded-lg shadow-sm border ${note.rotate} hover:rotate-0 transition-transform cursor-pointer group relative`}
                >
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => setNotes(notes.filter(n => n.id !== note.id))}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  {note.type === "quote" && (
                    <div className="flex items-center gap-1 mb-2 text-pink-600">
                      <MessageSquare className="w-3 h-3" />
                      <span className="text-xs font-bold">チャット引用</span>
                    </div>
                  )}
                  <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed font-medium">{note.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project List Preview */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-medium">最近のプロジェクト</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["次世代基盤開発", "マーケティング施策2024", "社内DX推進"].map((project, i) => (
                <div key={i} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <h3 className="font-bold text-gray-800 mb-2">{project}</h3>
                  <p className="text-sm text-gray-500">最終更新: 2時間前</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
