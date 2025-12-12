import React, { useState } from 'react';
import { 
  Search, 
  Folder, 
  FileText, 
  MoreVertical, 
  Filter,
  Plus
} from 'lucide-react';
import DemoLayout from '../../components/DemoLayout';

const Knowledge: React.FC = () => {
  return (
    <DemoLayout title="ナレッジベース">
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="ナレッジを検索..." 
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-3">
            <button className="btn btn-outline flex items-center gap-2">
              <Filter size={16} /> フィルター
            </button>
            <button className="btn btn-primary flex items-center gap-2">
              <Plus size={16} /> 新規作成
            </button>
          </div>
        </div>

        {/* Folders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: '技術開発部', count: 124, color: 'bg-blue-100 text-blue-600' },
            { name: '営業企画部', count: 85, color: 'bg-green-100 text-green-600' },
            { name: '人事・総務', count: 42, color: 'bg-purple-100 text-purple-600' },
            { name: '経営戦略室', count: 18, color: 'bg-orange-100 text-orange-600' },
          ].map((folder, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div className={`p-2 rounded-lg ${folder.color}`}>
                  <Folder size={24} />
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={16} />
                </button>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{folder.name}</h3>
              <p className="text-sm text-gray-500">{folder.count} アイテム</p>
            </div>
          ))}
        </div>

        {/* Recent Documents List */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-700">最近のドキュメント</h3>
            <div className="flex gap-2">
              <select className="text-sm border-gray-200 rounded-md py-1 px-2">
                <option>更新順</option>
                <option>作成順</option>
                <option>名前順</option>
              </select>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { title: '2024年度 第1四半期 開発ロードマップ', folder: '技術開発部', date: '2時間前', tags: ['計画', '開発'] },
              { title: '新製品「Alpha」マーケティングプラン', folder: '営業企画部', date: '5時間前', tags: ['マーケティング', '新製品'] },
              { title: '4月度 全体定例会議事録', folder: '経営戦略室', date: '昨日', tags: ['議事録', '全社'] },
              { title: 'リモートワーク規定改定案', folder: '人事・総務', date: '2日前', tags: ['規定', '人事'] },
              { title: 'API仕様書 v2.1', folder: '技術開発部', date: '3日前', tags: ['技術', 'API'] },
              { title: '競合他社分析レポート 2024', folder: '営業企画部', date: '1週間前', tags: ['調査', '競合'] },
            ].map((doc, i) => (
              <div key={i} className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{doc.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Folder size={12} /> {doc.folder}
                      </span>
                      <span className="text-xs text-gray-400">• {doc.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex gap-2">
                    {doc.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-50 text-center text-sm text-gray-500">
            全 1,248 件中 1-6 件を表示
          </div>
        </div>
      </div>
    </DemoLayout>
  );
};

export default Knowledge;
