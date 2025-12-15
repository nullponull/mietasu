import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Bell, User } from "lucide-react";
import { useState } from "react";

export default function MainDashboard() {
  const [notes, setNotes] = useState([
    { id: 1, content: "A社との定例会議の議事録を確認する", color: "bg-yellow-100" },
    { id: 2, content: "新規プロジェクトのメンバーアサイン案を作成", color: "bg-blue-100" },
  ]);

  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (!newNote.trim()) return;
    setNotes([...notes, { id: Date.now(), content: newNote, color: "bg-yellow-100" }]);
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
                { date: "2024-03-15", title: "システムメンテナンスのお知らせ", type: "重要" },
                { date: "2024-03-14", title: "新機能「AI要約プロ」がリリースされました", type: "News" },
                { date: "2024-03-10", title: "プロジェクトAの権限が変更されました", type: "通知" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors border-b last:border-0">
                  <div className="min-w-[100px] text-sm text-gray-500">{item.date}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={item.type === "重要" ? "destructive" : "secondary"} className="text-xs">
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
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">付箋メモ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Textarea 
                placeholder="新しいメモ..." 
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="min-h-[80px] bg-white"
              />
              <Button size="icon" onClick={addNote} className="h-auto">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {notes.map((note) => (
                <div key={note.id} className={`${note.color} p-4 rounded-lg shadow-sm border border-black/5 relative group`}>
                  <p className="text-sm text-gray-800 whitespace-pre-wrap">{note.content}</p>
                  <button 
                    onClick={() => setNotes(notes.filter(n => n.id !== note.id))}
                    className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-500 transition-opacity"
                  >
                    ×
                  </button>
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
