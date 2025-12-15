import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, File, X, FileText, Mic } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function FileUpload() {
  const [, setLocation] = useLocation();
  const [files, setFiles] = useState<string[]>([]);
  const [uploadType, setUploadType] = useState<"minutes" | "files">("minutes");

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const newFile = uploadType === "minutes" ? "meeting_audio_20240315.mp3" : "project_spec_v2.pdf";
    setFiles([...files, newFile]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">アップロード</h1>
      </div>

      <Tabs defaultValue="minutes" className="w-full" onValueChange={(v) => {
        setUploadType(v as "minutes" | "files");
        setFiles([]);
      }}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="minutes" className="flex items-center gap-2">
            <Mic className="w-4 h-4" />
            議事録（音声・動画）
          </TabsTrigger>
          <TabsTrigger value="files" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            一般ファイル
          </TabsTrigger>
        </TabsList>

        <TabsContent value="minutes">
          <Card>
            <CardHeader>
              <CardTitle>議事録のアップロード</CardTitle>
              <CardDescription>
                会議の録音データや動画ファイルをアップロードすると、AIが自動で文字起こしと要約を行います。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
                className="border-2 border-dashed border-blue-200 bg-blue-50/30 rounded-lg p-12 text-center hover:bg-blue-50 transition-colors cursor-pointer"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Mic className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-700">音声・動画ファイルをドラッグ＆ドロップ</p>
                    <p className="text-sm text-gray-500 mt-1">対応形式: mp3, wav, m4a, mp4 (最大 500MB)</p>
                  </div>
                  <Button variant="outline" className="mt-2">ファイルを選択</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files">
          <Card>
            <CardHeader>
              <CardTitle>ファイルのアップロード</CardTitle>
              <CardDescription>
                PDF、Word、Excelなどのドキュメントをプロジェクトに紐づけて保存します。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                    <Upload className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-700">ファイルをドラッグ＆ドロップ</p>
                    <p className="text-sm text-gray-500 mt-1">対応形式: pdf, docx, xlsx, pptx, txt, md</p>
                  </div>
                  <Button variant="outline" className="mt-2">ファイルを選択</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {files.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">アップロード待機中:</p>
              {files.map((file, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                  <div className="flex items-center gap-3">
                    {uploadType === "minutes" ? (
                      <Mic className="w-4 h-4 text-blue-500" />
                    ) : (
                      <FileText className="w-4 h-4 text-gray-500" />
                    )}
                    <span className="text-sm">{file}</span>
                  </div>
                  <button onClick={() => setFiles(files.filter((_, idx) => idx !== i))}>
                    <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              ))}
              <div className="flex justify-end pt-4">
                <Button onClick={() => setLocation("/project/1")} className="bg-blue-600 hover:bg-blue-700">
                  {uploadType === "minutes" ? "AI解析を開始する" : "アップロードする"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
