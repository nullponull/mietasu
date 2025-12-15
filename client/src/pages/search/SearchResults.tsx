import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText, Folder, MessageSquare, ArrowRight, Filter } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function SearchResults() {
  const [location, setLocation] = useLocation();
  const query = new URLSearchParams(window.location.search).get("q") || "API";
  const [activeTab, setActiveTab] = useState("all");

  const results = [
    { type: "project", title: "次世代基盤開発", desc: "クラウドネイティブな新基盤システムの設計と実装", match: "API実装フェーズ", date: "2時間前" },
    { type: "file", title: "API仕様書_v2.pdf", desc: "次世代基盤開発 / ファイル", match: "REST APIのエンドポイント定義", date: "2024/12/14" },
    { type: "minutes", title: "定例進捗会議 #12", desc: "次世代基盤開発 / 議事録", match: "API実装の完了期限を12/20に設定", date: "2024/12/10" },
    { type: "chat", title: "インフラ構成について", desc: "次世代基盤開発 / チャット", match: "APIゲートウェイの構成図", date: "10分前" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input 
            defaultValue={query} 
            className="pl-10 h-12 text-lg"
            placeholder="キーワードを入力..."
          />
        </div>
        <Button variant="outline" className="h-12 px-6">
          <Filter className="w-4 h-4 mr-2" />
          フィルター
        </Button>
      </div>

      <div className="flex gap-2 border-b pb-1">
        {["all", "project", "file", "minutes", "chat"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              activeTab === tab 
                ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600" 
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            {tab === "all" ? "すべて" : 
             tab === "project" ? "プロジェクト" :
             tab === "file" ? "ファイル" :
             tab === "minutes" ? "議事録" : "チャット"}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <p className="text-sm text-gray-500">"{query}" の検索結果: {results.length}件</p>
        
        {results.map((result, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  result.type === "project" ? "bg-blue-100 text-blue-600" :
                  result.type === "file" ? "bg-orange-100 text-orange-600" :
                  result.type === "minutes" ? "bg-green-100 text-green-600" :
                  "bg-purple-100 text-purple-600"
                }`}>
                  {result.type === "project" ? <Folder className="w-5 h-5" /> :
                   result.type === "file" ? <FileText className="w-5 h-5" /> :
                   result.type === "minutes" ? <FileText className="w-5 h-5" /> :
                   <MessageSquare className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs font-normal uppercase">
                        {result.type === "minutes" ? "議事録" : result.type}
                      </Badge>
                      <span className="text-xs text-gray-500">{result.date}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-600 mb-1 group-hover:underline">
                    {result.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{result.desc}</p>
                  <div className="text-sm text-gray-700 bg-gray-50 p-2 rounded border border-gray-100">
                    ...{result.match}...
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
