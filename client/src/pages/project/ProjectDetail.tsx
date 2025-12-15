import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, FileText, File, MessageSquare, Users, Clock, ArrowRight, Plus, Activity } from "lucide-react";
import { Link, useRoute } from "wouter";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id || "1";

  // Mock data
  const project = {
    id: projectId,
    name: "次世代基盤開発",
    description: "クラウドネイティブな新基盤システムの設計と実装",
    status: "進行中",
    members: 12,
    updated: "2時間前"
  };

  const minutes = [
    { id: 1, title: "定例進捗会議 #12", date: "2024-12-10", summary: "API実装の完了期限を12/20に設定。認証基盤にはAuth0を採用することで合意。" },
    { id: 2, title: "要件定義レビュー", date: "2024-12-03", summary: "非機能要件の確認完了。パフォーマンス目標値の設定について継続議論。" },
    { id: 3, title: "キックオフミーティング", date: "2024-11-25", summary: "プロジェクトの目的とゴールの共有。チーム体制の発表。" }
  ];

  const files = [
    { id: 1, name: "API仕様書_v2.pdf", type: "PDF", size: "2.4 MB", updated: "2024-12-12", author: "佐藤" },
    { id: 2, name: "システム構成図.pptx", type: "PPTX", size: "5.1 MB", updated: "2024-12-10", author: "鈴木" },
    { id: 3, name: "要件定義書.docx", type: "DOCX", size: "1.8 MB", updated: "2024-12-05", author: "田中" }
  ];

  const activities = [
    { id: 1, user: "佐藤 次郎", action: "API仕様書_v2.pdf をアップロードしました", time: "2時間前", type: "file" },
    { id: 2, user: "鈴木 花子", action: "定例進捗会議 #12 の議事録を作成しました", time: "5時間前", type: "minutes" },
    { id: 3, user: "山田 太郎", action: "プロジェクト設定を更新しました", time: "1日前", type: "settings" },
    { id: 4, user: "田中 一郎", action: "新規メンバーとして参加しました", time: "2日前", type: "member" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-800">{project.name}</h1>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{project.status}</Badge>
          </div>
          <p className="text-gray-500">{project.description}</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/project/${projectId}/settings`}>
            <Button variant="outline" asChild>
              <span>
                <Settings className="w-4 h-4 mr-2" />
                設定
              </span>
            </Button>
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            新規アップロード
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-full">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">議事録</p>
              <p className="text-2xl font-bold">12件</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-green-50 p-3 rounded-full">
              <File className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">ファイル</p>
              <p className="text-2xl font-bold">48件</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-purple-50 p-3 rounded-full">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">メンバー</p>
              <p className="text-2xl font-bold">{project.members}名</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="summary" className="space-y-4">
        <TabsList>
          <TabsTrigger value="summary">サマリ</TabsTrigger>
          <TabsTrigger value="minutes">議事録一覧</TabsTrigger>
          <TabsTrigger value="files">資料一覧</TabsTrigger>
          <TabsTrigger value="activity">アクティビティ</TabsTrigger>
        </TabsList>

        {/* Summary Tab */}
        <TabsContent value="summary" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-500" />
                AIプロジェクト要約
              </CardTitle>
              <CardDescription>直近の議事録と資料から生成されたプロジェクトの現状サマリです</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h3 className="font-bold text-purple-900 mb-2">今週のハイライト</h3>
                <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                  <li>API実装フェーズが開始され、完了期限が12/20に設定されました</li>
                  <li>認証基盤としてAuth0の採用が決定しました</li>
                  <li>システム構成図が更新され、マイクロサービスアーキテクチャの詳細が定義されました</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">決定事項</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs mt-0.5">完了</span>
                      <span>要件定義書の承認完了 (12/05)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs mt-0.5">決定</span>
                      <span>開発言語はGo、通信プロトコルはgRPCを採用</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">ネクストアクション</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs mt-0.5">期限: 12/15</span>
                      <span>Auth0のPoC環境構築 (担当: 田中)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs mt-0.5">期限: 12/18</span>
                      <span>API仕様書の更新と共有 (担当: 佐藤)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">最新の議事録</CardTitle>
                <Link href={`/project/${projectId}?tab=minutes`}>
                  <Button variant="ghost" size="sm" className="text-xs" asChild>
                    <span>すべて見る</span>
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {minutes.slice(0, 3).map((item) => (
                    <Link key={item.id} href={`/project/${projectId}/meeting/${item.id}`} className="block p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2">{item.summary}</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">最近更新された資料</CardTitle>
                <Link href={`/project/${projectId}?tab=files`}>
                  <Button variant="ghost" size="sm" className="text-xs" asChild>
                    <span>すべて見る</span>
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {files.slice(0, 3).map((file) => (
                    <Link key={file.id} href={`/project/${projectId}/file/${file.id}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-2 rounded">
                          <File className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">{file.name}</h4>
                          <p className="text-xs text-gray-500">{file.size} • {file.updated}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Minutes List Tab */}
        <TabsContent value="minutes">
          <Card>
            <CardHeader>
              <CardTitle>議事録一覧</CardTitle>
              <CardDescription>プロジェクトの会議記録とAI要約</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {minutes.map((item) => (
                  <Link key={item.id} href={`/project/${projectId}/meeting/${item.id}`} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-800">{item.title}</h3>
                        <Badge variant="outline">{item.date}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{item.summary}</p>
                    </div>
                    <Button variant="ghost" size="sm">詳細を見る</Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Files List Tab */}
        <TabsContent value="files">
          <Card>
            <CardHeader>
              <CardTitle>資料一覧</CardTitle>
              <CardDescription>プロジェクトに関連するドキュメントとファイル</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-12 gap-4 p-2 text-sm font-medium text-gray-500 border-b mb-2">
                  <div className="col-span-6">ファイル名</div>
                  <div className="col-span-2">種類</div>
                  <div className="col-span-2">サイズ</div>
                  <div className="col-span-2">更新日</div>
                </div>
                {files.map((file) => (
                  <Link key={file.id} href={`/project/${projectId}/file/${file.id}`} className="grid grid-cols-12 gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer items-center">
                    <div className="col-span-6 flex items-center gap-3">
                      <File className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-800">{file.name}</span>
                    </div>
                    <div className="col-span-2 text-sm text-gray-500">{file.type}</div>
                    <div className="col-span-2 text-sm text-gray-500">{file.size}</div>
                    <div className="col-span-2 text-sm text-gray-500">{file.updated}</div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Activity Log Tab */}
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>アクティビティログ</CardTitle>
              <CardDescription>プロジェクト内の活動履歴</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'file' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'minutes' ? 'bg-green-100 text-green-600' :
                        activity.type === 'settings' ? 'bg-gray-100 text-gray-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {activity.type === 'file' ? <File className="w-4 h-4" /> :
                         activity.type === 'minutes' ? <FileText className="w-4 h-4" /> :
                         activity.type === 'settings' ? <Settings className="w-4 h-4" /> :
                         <Users className="w-4 h-4" />}
                      </div>
                      <div className="w-0.5 h-full bg-gray-100 mt-2 last:hidden"></div>
                    </div>
                    <div className="pb-6">
                      <p className="text-sm text-gray-800">
                        <span className="font-bold">{activity.user}</span> が {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
