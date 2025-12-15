import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, File, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function FileUpload() {
  const [, setLocation] = useLocation();
  const [files, setFiles] = useState<string[]>([]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFiles([...files, "meeting_notes_20240315.pdf"]);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">ファイルアップロード</h1>

      <Card>
        <CardHeader>
          <CardTitle>アップロード設定</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">プロジェクト選択</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="プロジェクトを選択..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="p1">次世代基盤開発</SelectItem>
                <SelectItem value="p2">マーケティング施策2024</SelectItem>
                <SelectItem value="p3">社内DX推進</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                <Upload className="w-8 h-8" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700">ファイルをドラッグ＆ドロップ</p>
                <p className="text-sm text-gray-500 mt-1">または クリックして選択</p>
              </div>
            </div>
          </div>

          {files.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">アップロード待機中:</p>
              {files.map((file, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                  <div className="flex items-center gap-3">
                    <File className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{file}</span>
                  </div>
                  <button onClick={() => setFiles(files.filter((_, idx) => idx !== i))}>
                    <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              ))}
              <div className="flex justify-end pt-4">
                <Button onClick={() => setLocation("/project/1")}>
                  アップロードしてプロジェクトへ移動
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
