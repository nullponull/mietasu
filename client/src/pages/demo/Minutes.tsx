import { Mic, Upload, Play, FileText } from "lucide-react";

export default function Minutes() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">議事録作成</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h2 className="font-bold mb-4">新規作成</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg hover:bg-slate-50 hover:border-primary transition-colors">
                <Mic size={32} className="text-primary mb-2" />
                <span className="font-medium">録音開始</span>
                <span className="text-xs text-muted-foreground mt-1">マイク入力を使用</span>
              </button>
              <button className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg hover:bg-slate-50 hover:border-primary transition-colors">
                <Upload size={32} className="text-primary mb-2" />
                <span className="font-medium">ファイルアップロード</span>
                <span className="text-xs text-muted-foreground mt-1">mp3, wav, m4a</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h2 className="font-bold mb-4">処理中のタスク</h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded border">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">週次定例ミーティング.mp3</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">処理中...</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>文字起こし中</span>
                  <span>残り約3分</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm h-full">
          <h2 className="font-bold mb-4">最近の議事録</h2>
          <div className="space-y-4">
            {[
              { title: 'プロジェクトキックオフ', date: '2024/03/14', duration: '45:20' },
              { title: 'デザインレビュー', date: '2024/03/12', duration: '32:15' },
              { title: 'マーケティング定例', date: '2024/03/10', duration: '58:40' },
            ].map((item, i) => (
              <div key={i} className="border rounded p-4 hover:bg-slate-50 cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Play size={14} /> {item.duration}</span>
                  <span className="flex items-center gap-1"><FileText size={14} /> 要約済</span>
                </div>
                <div className="text-sm bg-slate-100 p-2 rounded text-slate-600">
                  <span className="font-bold text-xs text-slate-500 block mb-1">AI要約プレビュー:</span>
                  本会議では、新プロジェクトのスケジュール確認と役割分担について議論されました。主な決定事項として...
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
