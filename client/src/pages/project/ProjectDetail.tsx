import { useParams } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Mic, BarChart3, Clock, MoreHorizontal, File } from "lucide-react";

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id || "1";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">次世代基盤開発プロジェクト</h1>
            <Badge>進行中</Badge>
          </div>
          <p className="text-gray-500">最終更新: 2024/03/15 14:30 by 山田太郎</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">設定</Button>
          <Button>新規議事録作成</Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-50 border-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-800">プロジェクトサマリ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">順調</div>
            <p className="text-xs text-blue-600 mt-1">予定通り進行中、遅延なし</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-800">今週の議事録</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">3件</div>
            <p className="text-xs text-green-600 mt-1">前回比 +1件</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border-purple-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-800">共有ファイル</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">45</div>
            <p className="text-xs text-purple-600 mt-1">合計 2.4GB</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content: Minutes & Summary */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Summary Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-500" />
                最新のAI要約
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-gray-50/50 p-6 rounded-b-lg">
              <div className="prose prose-sm max-w-none text-gray-700">
                <p className="font-bold mb-2">今週のハイライト:</p>
                <ul className="list-disc pl-4 space-y-1 mb-4">
                  <li>インフラ構成の基本設計が完了し、レビューフェーズへ移行</li>
                  <li>API仕様書のドラフト版が共有され、フロントエンドチームとのすり合わせを開始</li>
                  <li>セキュリティ要件定義において、認証方式の再検討が必要との指摘あり</li>
                </ul>
                <p className="font-bold mb-2">ネクストアクション:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>3/20までにセキュリティ要件の修正案を作成（担当: 佐藤）</li>
                  <li>3/22にAPI仕様レビュー会を実施予定</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Minutes List */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-rose-500" />
                議事録一覧
              </CardTitle>
              <Button variant="ghost" size="sm">すべて見る</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {[
                  { title: "第4回 基本設計レビュー", date: "2024/03/15", author: "山田 太郎", tags: ["設計", "レビュー"] },
                  { title: "API仕様すり合わせMTG", date: "2024/03/14", author: "鈴木 花子", tags: ["API", "フロントエンド"] },
                  { title: "セキュリティ要件定義", date: "2024/03/12", author: "佐藤 次郎", tags: ["セキュリティ"] },
                  { title: "キックオフミーティング", date: "2024/03/01", author: "山田 太郎", tags: ["全社"] },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {item.date}</span>
                          <span>{item.author}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal text-gray-500">{tag}</Badge>
                      ))}
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar: Files & Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <File className="w-5 h-5 text-gray-500" />
                資料一覧
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "基本設計書_v1.0.pdf", size: "2.4MB", type: "PDF" },
                  { name: "API仕様書_draft.xlsx", size: "1.1MB", type: "EXCEL" },
                  { name: "画面遷移図.fig", size: "5.6MB", type: "FIGMA" },
                  { name: "要件定義書_final.pdf", size: "3.2MB", type: "PDF" },
                ].map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded border border-transparent hover:border-gray-200 transition-all cursor-pointer">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
                        {file.type}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-700 truncate">{file.name}</p>
                        <p className="text-xs text-gray-400">{file.size}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-2 text-xs">もっと見る</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">プロジェクト情報</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-4">
              <div>
                <div className="text-gray-500 mb-1">期間</div>
                <div className="font-medium">2024/03/01 - 2024/08/31</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">リーダー</div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <span>山田 太郎</span>
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">メンバー</div>
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-500">
                      User
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-500">
                    +7
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
