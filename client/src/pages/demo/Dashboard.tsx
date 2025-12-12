import React from 'react';
import { 
  Users, 
  FileText, 
  Database, 
  TrendingUp,
  Clock,
  MoreHorizontal
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">ダッシュボード</h1>
        <div className="page-actions">
          <button className="btn btn-outline">期間: 今月</button>
          <button className="btn btn-primary">レポート出力</button>
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-label">総ナレッジ数</div>
          <div className="stat-value">1,248</div>
          <div className="stat-trend trend-up">
            <TrendingUp size={12} style={{display: 'inline', marginRight: '4px'}} />
            先月比 +12%
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">今月の議事録</div>
          <div className="stat-value">42</div>
          <div className="stat-trend trend-up">
            <TrendingUp size={12} style={{display: 'inline', marginRight: '4px'}} />
            先月比 +8%
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">アクティブユーザー</div>
          <div className="stat-value">86</div>
          <div className="stat-trend">
            <span className="text-gray-500">全ユーザーの92%</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">AI処理時間削減</div>
          <div className="stat-value">128h</div>
          <div className="stat-trend trend-up">
            <TrendingUp size={12} style={{display: 'inline', marginRight: '4px'}} />
            約 ¥640,000 相当
          </div>
        </div>
      </div>

      <div className="grid-2" style={{gap: '24px'}}>
        <div className="demo-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="demo-card-title mb-0">最近のアクティビティ</h3>
            <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={20} /></button>
          </div>
          <table className="demo-table">
            <thead>
              <tr>
                <th>アクティビティ</th>
                <th>ユーザー</th>
                <th>時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-blue-500" />
                    <span>議事録「Aプロジェクト定例」を作成</span>
                  </div>
                </td>
                <td>田中 太郎</td>
                <td className="text-gray-500">10分前</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <Database size={16} className="text-green-500" />
                    <span>ナレッジ「営業マニュアル」を更新</span>
                  </div>
                </td>
                <td>鈴木 一郎</td>
                <td className="text-gray-500">32分前</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-purple-500" />
                    <span>新規ユーザー「佐藤 花子」を追加</span>
                  </div>
                </td>
                <td>管理者</td>
                <td className="text-gray-500">1時間前</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-blue-500" />
                    <span>議事録「採用面接ログ」を作成</span>
                  </div>
                </td>
                <td>高橋 健太</td>
                <td className="text-gray-500">2時間前</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="demo-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="demo-card-title mb-0">ナレッジ活用状況</h3>
            <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={20} /></button>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>技術ドキュメント</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>営業資料・提案書</span>
                <span className="font-medium">30%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '30%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>会議議事録</span>
                <span className="font-medium">15%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '15%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>その他（総務・労務）</span>
                <span className="font-medium">10%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{width: '10%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock size={16} />
              <span>最終バックアップ: 本日 03:00 (Local Storage)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
