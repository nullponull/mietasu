import React from 'react';
import { 
  Folder, 
  FileText, 
  MoreVertical, 
  Search,
  Filter,
  Plus
} from 'lucide-react';

const Knowledge: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">ナレッジベース</h1>
        <div className="page-actions">
          <button className="btn btn-outline flex items-center gap-2">
            <Filter size={16} /> フィルター
          </button>
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={16} /> 新規作成
          </button>
        </div>
      </div>

      <div className="grid-2" style={{gridTemplateColumns: '250px 1fr', gap: '24px'}}>
        {/* Sidebar Navigation */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 h-fit">
          <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 px-2">フォルダー</h3>
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-2 px-2 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-medium">
              <Folder size={16} className="fill-blue-200" />
              すべてのナレッジ
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm">
              <Folder size={16} />
              技術開発部
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm">
              <Folder size={16} />
              営業企画部
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm">
              <Folder size={16} />
              人事・総務
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm">
              <Folder size={16} />
              プロジェクトA
            </a>
          </nav>

          <h3 className="text-xs font-bold text-gray-500 uppercase mt-6 mb-3 px-2">タグ</h3>
          <div className="flex flex-wrap gap-2 px-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">#重要</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">#マニュアル</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">#議事録</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">#企画書</span>
          </div>
        </div>

        {/* Main List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex items-center gap-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="タイトル、内容、タグで検索..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <select className="border border-gray-200 rounded-md px-3 py-2 text-sm bg-white">
              <option>更新順</option>
              <option>作成順</option>
              <option>閲覧数順</option>
            </select>
          </div>

          <table className="demo-table">
            <thead>
              <tr>
                <th style={{width: '40%'}}>タイトル</th>
                <th>フォルダー</th>
                <th>更新者</th>
                <th>更新日</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[
                { title: '2025年度 開発ロードマップ', folder: '技術開発部', user: '田中 太郎', date: '2025/12/10', tag: '重要' },
                { title: '新製品「Alpha」営業資料 v2', folder: '営業企画部', user: '鈴木 一郎', date: '2025/12/09', tag: '資料' },
                { title: 'プロジェクトA 定例会議議事録 (12/08)', folder: 'プロジェクトA', user: '佐藤 花子', date: '2025/12/08', tag: '議事録' },
                { title: '社内セキュリティガイドライン', folder: '人事・総務', user: '管理者', date: '2025/12/05', tag: '規定' },
                { title: 'API仕様書 - 認証基盤', folder: '技術開発部', user: '高橋 健太', date: '2025/12/01', tag: '技術' },
                { title: '冬季休業のお知らせ', folder: '人事・総務', user: '総務 担当', date: '2025/11/28', tag: 'お知らせ' },
              ].map((item, i) => (
                <tr key={i} className="hover:bg-gray-50 cursor-pointer transition-colors">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded">
                        <FileText size={16} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{item.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 mr-2">#{item.tag}</span>
                          AI要約済み
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {item.folder}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                        {item.user.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600">{item.user}</span>
                    </div>
                  </td>
                  <td className="text-sm text-gray-500">{item.date}</td>
                  <td>
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="p-4 border-t border-gray-200 bg-gray-50 text-center text-sm text-gray-500">
            全 1,248 件中 1-6 件を表示
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
