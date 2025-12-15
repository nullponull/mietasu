import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Download, Share2, Clock, Calendar, Play, Pause, RotateCcw, RotateCw, Volume2 } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function MeetingDetail() {
  const [isPlaying, setIsPlaying] = useState(false);

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
            <span>議事録</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">定例進捗会議 #12</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Share2 className="w-4 h-4 mr-2" />
            共有
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            ダウンロード
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Audio Player */}
          <Card className="bg-white border p-4 flex items-center gap-4 shadow-sm sticky top-4 z-10">
            <Button 
              size="icon" 
              className="rounded-full w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-transform active:scale-95"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </Button>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-medium text-blue-600">15:30</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden cursor-pointer hover:bg-gray-200 transition-colors relative group">
                  <div className="h-full w-[34%] bg-blue-500 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                <span className="text-xs font-mono text-gray-400">45:00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-6 text-xs text-gray-500 hover:text-blue-600">
                    <RotateCcw className="w-3 h-3 mr-1" /> 10秒
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 text-xs text-gray-500 hover:text-blue-600">
                    30秒 <RotateCw className="w-3 h-3 ml-1" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-gray-400" />
                  <div className="w-20 h-1 bg-gray-200 rounded-full">
                    <div className="w-3/4 h-full bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* AI Summary */}
          <Card className="bg-blue-50/50 border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <span className="text-xl">✨</span> AIサマリー
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">決定事項</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>API実装の完了期限を12/20に設定</li>
                  <li>認証基盤にはAuth0を採用することで合意</li>
                  <li>次回のスプリントレビューは12/25に実施</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">ネクストアクション</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>田中: Auth0のPoC環境を構築 (期限: 12/15)</li>
                  <li>佐藤: API仕様書の更新と共有 (期限: 12/18)</li>
                  <li>鈴木: フロントエンドの実装方針策定 (期限: 12/20)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Transcript */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>文字起こし</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { time: "00:00", speaker: "田中", text: "それでは定例会議を始めます。まずは進捗確認からお願いします。" },
                { time: "00:15", speaker: "佐藤", text: "APIの実装状況ですが、現在80%程度完了しています。認証周りの設計で少し議論が必要です。", active: true },
                { time: "01:20", speaker: "鈴木", text: "フロントエンド側もAPI待ちの状態ですね。モックアップでの開発は進めています。" },
                { time: "02:45", speaker: "田中", text: "認証についてはAuth0を使う方向で進めましょう。PoC環境を私が用意します。" },
              ].map((log, i) => (
                <div key={i} className={`flex gap-4 p-3 rounded-lg transition-colors ${log.active ? "bg-blue-50 border border-blue-100" : "hover:bg-gray-50"}`}>
                  <div className="min-w-[60px] text-sm text-gray-400 pt-1 font-mono">{log.time}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback>{log.speaker[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-bold text-sm">{log.speaker}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{log.text}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Meta Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">会議情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>2024年12月10日 (火)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>14:00 - 15:00 (60分)</span>
              </div>
              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-3">参加者 (5名)</h4>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Avatar key={i} className="border-2 border-white w-8 h-8">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Files */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">関連資料</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link href="/project/1/file/1">
                  <a className="block p-2 hover:bg-gray-50 rounded text-sm text-blue-600 hover:underline">
                    📄 API仕様書_v2.pdf
                  </a>
                </Link>
                <Link href="/project/1/file/2">
                  <a className="block p-2 hover:bg-gray-50 rounded text-sm text-blue-600 hover:underline">
                    📊 進捗報告資料.pptx
                  </a>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
