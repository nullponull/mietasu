import React, { useState } from 'react';
import { 
  Mic, 
  Upload, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  User,
  MoreHorizontal,
  FileText,
  Download
} from 'lucide-react';
import DemoLayout from '../../components/DemoLayout';

const Minutes: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <DemoLayout title="議事録・録音">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]">
        {/* Left Column: Recording & List */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Recording Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">新規録音・アップロード</h3>
            <div className="grid grid-cols-2 gap-4">
              <button 
                className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${
                  isRecording 
                    ? 'border-red-500 bg-red-50 text-red-600' 
                    : 'border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setIsRecording(!isRecording)}
              >
                <div className={`p-3 rounded-full mb-2 ${isRecording ? 'bg-red-100 animate-pulse' : 'bg-gray-100'}`}>
                  <Mic size={24} />
                </div>
                <span className="font-medium text-sm">{isRecording ? '録音中...' : '録音開始'}</span>
                {isRecording && <span className="text-xs mt-1 font-mono">00:12</span>}
              </button>
              
              <button className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all">
                <div className="p-3 bg-gray-100 rounded-full mb-2">
                  <Upload size={24} />
                </div>
                <span className="font-medium text-sm">ファイル選択</span>
              </button>
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center">
              対応形式: MP3, WAV, M4A (最大 500MB)
            </div>
          </div>

          {/* Recent Recordings List */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-bold text-gray-700">最近の議事録</h3>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-gray-200">
              {[
                { title: '週次定例ミーティング', date: '今日 10:00', duration: '45:20', status: 'completed' },
                { title: '製品企画会議', date: '昨日 14:30', duration: '1:12:05', status: 'completed' },
                { title: 'クライアント打ち合わせ', date: '2024/04/10', duration: '32:15', status: 'processing' },
                { title: '採用面接（エンジニア）', date: '2024/04/09', duration: '55:00', status: 'completed' },
                { title: 'Q2予算策定会議', date: '2024/04/08', duration: '2:05:30', status: 'completed' },
              ].map((item, i) => (
                <div key={i} className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${i === 0 ? 'bg-blue-50/50 border-l-4 border-blue-500' : ''}`}>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-gray-900 line-clamp-1">{item.title}</h4>
                    {item.status === 'completed' ? (
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                    ) : (
                      <RotateCcw size={16} className="text-orange-500 animate-spin flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Clock size={12} /> {item.date}</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Detail View */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          {/* Detail Header */}
          <div className="p-6 border-b border-gray-200 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">要約完了</span>
                <span className="text-sm text-gray-500">2024年4月12日 10:00 - 10:45</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">週次定例ミーティング</h2>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-outline p-2">
                <Download size={20} />
              </button>
              <button className="btn btn-outline p-2">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>

          {/* Audio Player */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-4">
            <button 
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </button>
            <div className="flex-1">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-1/3 relative"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>15:20</span>
                <span>45:20</span>
              </div>
            </div>
            <select className="text-xs border-gray-200 rounded bg-white py-1">
              <option>1.0x</option>
              <option>1.25x</option>
              <option>1.5x</option>
              <option>2.0x</option>
            </select>
          </div>

          {/* Content Tabs */}
          <div className="flex border-b border-gray-200">
            <button className="px-6 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600 bg-blue-50/50">
              AI要約
            </button>
            <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50">
              書き起こし
            </button>
            <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50">
              アクションアイテム
            </button>
          </div>

          {/* Summary Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <section>
              <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                <FileText size={18} className="text-blue-600" />
                会議の概要
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                本日の定例会議では、主にQ2のマーケティング施策と新製品「Alpha」のローンチスケジュールについて議論されました。
                マーケティングチームからは、SNS広告の予算増額とインフルエンサー起用の提案があり、承認されました。
                開発チームからは、一部機能の実装遅れが報告されましたが、リリース日への影響は軽微であるとの見解が示されました。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-gray-900 mb-3">決定事項</h3>
              <ul className="space-y-2">
                {[
                  'SNS広告予算を月額50万円から80万円に増額する',
                  '新製品「Alpha」のプレスリリースを4月25日に配信する',
                  '開発チームは来週中にバグ修正を完了させる'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-green-50 p-3 rounded-lg border border-green-100">
                    <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-gray-900 mb-3">主な発言</h3>
              <div className="space-y-4">
                {[
                  { user: '佐藤 健', time: '05:12', text: 'SNS広告のパフォーマンスが良いので、予算を増やしてさらに攻めるべきだと思います。' },
                  { user: '田中 太郎', time: '12:45', text: '開発リソースの調整が必要ですが、リリース日は死守します。' },
                  { user: '鈴木 一郎', time: '28:30', text: '競合他社の動きも活発化しているので、差別化ポイントを明確に打ち出しましょう。' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <User size={14} className="text-gray-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm text-gray-900">{item.user}</span>
                        <span className="text-xs text-gray-400">{item.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg rounded-tl-none">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
};

export default Minutes;
