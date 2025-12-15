import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Download, Share2, Clock, FileText, Eye, History } from "lucide-react";
import { Link } from "wouter";

export default function FileDetail() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/project/1">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <span>次世代基盤開発</span>
            <span>/</span>
            <span>ファイル</span>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">API仕様書_v2.pdf</h1>
            <Badge variant="outline">PDF</Badge>
            <Badge>最新版</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Share2 className="w-4 h-4 mr-2" />
            共有
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            ダウンロード
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* File Preview Placeholder */}
          <Card className="h-[600px] bg-gray-100 flex items-center justify-center border-2 border-dashed">
            <div className="text-center text-gray-500">
              <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">プレビューを表示できません</p>
              <p className="text-sm">このファイル形式はプレビューに対応していません</p>
              <Button variant="link" className="mt-2">ダウンロードして確認</Button>
            </div>
          </Card>

          {/* Comments */}
          <Card>
            <CardHeader>
              <CardTitle>コメント (3件)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { user: "佐藤", time: "2時間前", text: "P.15のレスポンス形式について修正が必要です。" },
                { user: "田中", time: "3時間前", text: "認証フロー図を追加しました。確認お願いします。" },
                { user: "鈴木", time: "5時間前", text: "v2として更新しました。" },
              ].map((comment, i) => (
                <div key={i} className="flex gap-4">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>{comment.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm">{comment.user}</span>
                      <span className="text-xs text-gray-400">{comment.time}</span>
                    </div>
                    <p className="text-sm text-gray-700">{comment.text}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 pt-4 border-t">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>Me</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="コメントを入力..." 
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* File Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">ファイル情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">サイズ</p>
                  <p className="font-medium">2.4 MB</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">種類</p>
                  <p className="font-medium">PDF ドキュメント</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">作成日</p>
                  <p className="font-medium">2024/12/10</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">更新日</p>
                  <p className="font-medium">2024/12/14</p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-gray-500 text-sm mb-2">アップロード者</p>
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback>鈴</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">鈴木 一郎</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Version History */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <History className="w-4 h-4" />
                更新履歴
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { ver: "v2.0", date: "2024/12/14 15:30", user: "鈴木", current: true },
                  { ver: "v1.5", date: "2024/12/12 10:00", user: "田中", current: false },
                  { ver: "v1.0", date: "2024/12/10 09:00", user: "佐藤", current: false },
                ].map((history, i) => (
                  <div key={i} className="flex items-start gap-3 relative">
                    {i !== 2 && <div className="absolute left-[5px] top-6 bottom-[-16px] w-[2px] bg-gray-100" />}
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${history.current ? "bg-blue-500" : "bg-gray-300"}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-medium text-sm ${history.current ? "text-blue-600" : "text-gray-700"}`}>
                          {history.ver}
                        </span>
                        {history.current && <Badge variant="secondary" className="text-[10px]">Current</Badge>}
                      </div>
                      <p className="text-xs text-gray-500 mb-1">{history.date} by {history.user}</p>
                      {!history.current && (
                        <Button variant="link" className="h-auto p-0 text-xs text-blue-500">
                          復元する
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
