import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Save, Archive, Trash2, AlertTriangle, UserPlus, X, Wand2 } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useState } from "react";

export default function ProjectSettings() {
  const [, params] = useRoute("/project/:id/settings");
  const projectId = params?.id || "1";

  const [isActive, setIsActive] = useState(true);
  const [prompt, setPrompt] = useState(`あなたは「次世代基盤開発」プロジェクトのアシスタントです。
以下のルールに従って回答してください：
1. プロジェクトの技術スタック（Go, gRPC, Kubernetes）を前提とする
2. 回答は簡潔に、エンジニア向けに技術的な詳細を含める
3. 不確かな情報は「確認が必要です」と明記する`);

  const [members, setMembers] = useState([
    { id: 1, name: "山田 太郎", email: "taro.yamada@example.com", role: "admin" },
    { id: 2, name: "鈴木 花子", email: "hanako.suzuki@example.com", role: "editor" },
    { id: 3, name: "佐藤 次郎", email: "jiro.sato@example.com", role: "viewer" },
  ]);

  const [newMemberEmail, setNewMemberEmail] = useState("");

  const handleAddMember = () => {
    if (newMemberEmail) {
      setMembers([...members, { id: Date.now(), name: "新規ユーザー", email: newMemberEmail, role: "viewer" }]);
      setNewMemberEmail("");
    }
  };

  const handleRemoveMember = (id: number) => {
    setMembers(members.filter(m => m.id !== id));
  };

  const applyPromptTemplate = (type: string) => {
    if (type === "summary") {
      setPrompt(`あなたはプロジェクトの要約アシスタントです。
以下の点に注意して回答してください：
1. 決定事項と未決事項を明確に区別する
2. ネクストアクションには必ず担当者と期限を含める
3. 箇条書きを使用して可読性を高める`);
    } else if (type === "technical") {
      setPrompt(`あなたは技術エキスパートです。
以下の点に注意して回答してください：
1. アーキテクチャ、コード、インフラに関する技術的な詳細を重視する
2. セキュリティとパフォーマンスへの影響を常に考慮する
3. 具体的なコード例やコマンドを含めて説明する`);
    } else if (type === "creative") {
      setPrompt(`あなたはアイデア創出のファシリテーターです。
以下の点に注意して回答してください：
1. 批判せず、多様な視点からのアイデアを提示する
2. 実現可能性よりも新規性を重視する
3. ユーザー体験（UX）を中心とした提案を行う`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/project/${projectId}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">プロジェクト設定</h1>
          <p className="text-gray-500">次世代基盤開発</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle>基本設定</CardTitle>
              <CardDescription>プロジェクトの基本情報を管理します</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">プロジェクト名</Label>
                <Input id="name" defaultValue="次世代基盤開発" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">説明</Label>
                <Textarea id="description" defaultValue="クラウドネイティブな新基盤システムの設計と実装" />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-0.5">
                  <Label className="text-base">プロジェクトステータス</Label>
                  <p className="text-sm text-gray-500">
                    {isActive ? "現在アクティブです" : "アーカイブ済みです"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{isActive ? "アクティブ" : "アーカイブ"}</span>
                  <Switch checked={isActive} onCheckedChange={setIsActive} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Prompt Settings */}
          <Card>
            <CardHeader>
              <CardTitle>AIアシスタント設定</CardTitle>
              <CardDescription>このプロジェクトでのAIの振る舞いや前提知識を設定します</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="prompt">システムプロンプト</Label>
                <p className="text-sm text-gray-500 mb-2">
                  AIが回答を生成する際の指針となる指示を入力してください。
                </p>
                <div className="flex gap-2 mb-2">
                  <Button variant="outline" size="sm" onClick={() => applyPromptTemplate("summary")}>
                    <Wand2 className="w-3 h-3 mr-1" />
                    要約重視
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => applyPromptTemplate("technical")}>
                    <Wand2 className="w-3 h-3 mr-1" />
                    技術重視
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => applyPromptTemplate("creative")}>
                    <Wand2 className="w-3 h-3 mr-1" />
                    アイデア重視
                  </Button>
                </div>
                <Textarea 
                  id="prompt" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[200px] font-mono text-sm"
                />
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  設定を保存
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Member Management */}
          <Card>
            <CardHeader>
              <CardTitle>メンバー管理</CardTitle>
              <CardDescription>プロジェクトに参加するメンバーと権限を管理します</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-2">
                <Input 
                  placeholder="メールアドレスを入力" 
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />
                <Button onClick={handleAddMember}>
                  <UserPlus className="w-4 h-4 mr-2" />
                  招待
                </Button>
              </div>
              
              <div className="space-y-4">
                {members.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.email}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select defaultValue={member.role}>
                        <SelectTrigger className="w-[110px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">管理者</SelectItem>
                          <SelectItem value="editor">編集者</SelectItem>
                          <SelectItem value="viewer">閲覧者</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500" onClick={() => handleRemoveMember(member.id)}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Visibility Settings */}
          <Card>
            <CardHeader>
              <CardTitle>公開範囲</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>アクセス権限</Label>
                <Select defaultValue="private">
                  <SelectTrigger>
                    <SelectValue placeholder="公開範囲を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">プライベート（招待のみ）</SelectItem>
                    <SelectItem value="internal">社内公開（全社員閲覧可）</SelectItem>
                    <SelectItem value="public">パブリック</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Danger Zone
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                  <Archive className="w-4 h-4 mr-2" />
                  プロジェクトをアーカイブ
                </Button>
                <p className="text-xs text-gray-500">
                  アーカイブすると一覧には表示されなくなりますが、データは保持されます。
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <Button variant="destructive" className="w-full justify-start">
                  <Trash2 className="w-4 h-4 mr-2" />
                  プロジェクトを削除
                </Button>
                <p className="text-xs text-red-500">
                  この操作は取り消せません。全てのデータが完全に削除されます。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
