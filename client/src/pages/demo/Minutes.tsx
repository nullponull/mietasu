import React, { useState } from 'react';
import { 
  Mic, 
  Upload, 
  Pause, 
  FileText, 
  Check, 
  Clock, 
  User,
  Wand2,
  Download
} from 'lucide-react';

import DemoLayout from '../../components/DemoLayout';

const Minutes: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [activeTab, setActiveTab] = useState<'record' | 'list'>('record');

  return (
    <DemoLayout title="議事録・録音">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">議事録・録音</h1>
        <div>
          <div className="flex bg-white rounded-lg border border-gray-200 p-1">
            <button 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'record' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('record')}
            >
              新規作成
            </button>
            <button 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'list' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('list')}
            >
              一覧
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recording / Upload Area */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Mic className="text-red-500" />
              音声入力
            </h2>
            
            <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
              {isRecording ? (
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <Mic size={40} className="text-red-600" />
                  </div>
                  <div className="text-2xl font-mono font-bold text-gray-800">00:12:45</div>
                  <p className="text-gray-500">録音中... 会議の内容をリアルタイムで解析しています</p>
                  <button 
                    onClick={() => setIsRecording(false)}
                    className="btn bg-red-600 text-white hover:bg-red-700 px-8"
                  >
                    <Pause size={18} className="mr-2" /> 録音停止
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Mic size={40} className="text-blue-600" />
                  </div>
                  <p className="text-gray-600 font-medium">クリックして録音を開始</p>
                  <p className="text-sm text-gray-400">または</p>
                  <button className="btn btn-outline">
                    <Upload size={18} className="mr-2" /> 音声ファイルをアップロード
                  </button>
                  <div className="pt-4">
                    <button 
                      onClick={() => setIsRecording(true)}
                      className="btn btn-primary px-8"
                    >
                      録音開始
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-3">設定</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded border border-gray-200">
                      <Wand2 size={16} className="text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">AIリアルタイム要約</div>
                      <div className="text-xs text-gray-500">録音しながら要点を抽出します</div>
                    </div>
                  </div>
                  <div className="relative inline-block w-10 h-6 transition duration-200 ease-in-out rounded-full bg-blue-600 cursor-pointer">
                    <span className="absolute left-0 inline-block w-6 h-6 bg-white border border-gray-300 rounded-full shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded border border-gray-200">
                      <User size={16} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">話者分離</div>
                      <div className="text-xs text-gray-500">誰が話しているかを自動識別します</div>
                    </div>
                  </div>
                  <div className="relative inline-block w-10 h-6 transition duration-200 ease-in-out rounded-full bg-blue-600 cursor-pointer">
                    <span className="absolute left-0 inline-block w-6 h-6 bg-white border border-gray-300 rounded-full shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview / Result Area */}
        <div className="bg-white rounded-lg border border-gray-200 flex flex-col h-[600px]">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h2 className="font-bold flex items-center gap-2">
              <FileText size={18} className="text-gray-500" />
              プレビュー: プロジェクトA 定例会議
            </h2>
            <div className="flex gap-2">
              <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded">
                <Download size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h3 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-2">
                <Wand2 size={14} /> AI要約
              </h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                本日の会議では、新機能「Alpha」のリリーススケジュールについて合意しました。
                主な決定事項は以下の通りです：
                1. APIの実装は12/20までに完了する
                2. QAテスト計画は来週中に作成する
                3. セキュリティ要件として、オンプレミス環境での検証を追加する
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-600">
                  田中
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-gray-900">田中 太郎</span>
                    <span className="text-xs text-gray-400">10:02</span>
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg rounded-tl-none">
                    それでは、定例会議を始めます。まずは進捗確認からお願いします。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-xs font-bold text-blue-600">
                  鈴木
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-gray-900">鈴木 一郎</span>
                    <span className="text-xs text-gray-400">10:03</span>
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg rounded-tl-none">
                    はい。APIの実装については順調に進んでおり、予定通り12/20には完了する見込みです。
                    ただ、認証周りで少し課題が出ています。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-xs font-bold text-green-600">
                  佐藤
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-gray-900">佐藤 花子</span>
                    <span className="text-xs text-gray-400">10:05</span>
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg rounded-tl-none">
                    認証周りの課題とは具体的にどのようなものでしょうか？
                    セキュリティチームにも共有しておきたいので。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock size={16} />
                <span>録音時間: 45分20秒</span>
              </div>
              <button className="btn btn-primary">
                <Check size={16} className="mr-2" /> 議事録を確定して保存
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </DemoLayout>
  );
};

export default Minutes;
