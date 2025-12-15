import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Save, Archive, Trash2, AlertTriangle } from "lucide-react";
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
