import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, Lock, User, Palette } from "lucide-react";

export default function IndividualSettings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">個人設定</h1>
      
      <div className="grid gap-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              プロフィール設定
            </CardTitle>
            <CardDescription>アカウント情報の確認と変更を行います。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">表示名</Label>
              <Input id="name" defaultValue="管理者 ユーザー" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input id="email" defaultValue="admin@example.com" disabled />
            </div>
            <Button>変更を保存</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              通知設定
            </CardTitle>
            <CardDescription>通知を受け取るタイミングを設定します。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>議事録の追加通知</Label>
                <p className="text-sm text-gray-500">参加プロジェクトに新しい議事録が追加された時に通知します</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>メンション通知</Label>
                <p className="text-sm text-gray-500">チャットやコメントでメンションされた時に通知します</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>AI要約完了通知</Label>
                <p className="text-sm text-gray-500">議事録のAI要約が完了した時に通知します</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              表示設定
            </CardTitle>
            <CardDescription>アプリケーションの表示テーマを設定します。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>ダークモード</Label>
                <p className="text-sm text-gray-500">画面を暗い配色に切り替えます</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              セキュリティ
            </CardTitle>
            <CardDescription>パスワードや認証に関する設定です。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline">パスワードを変更</Button>
            <Button variant="outline" className="ml-2">2段階認証を設定</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
