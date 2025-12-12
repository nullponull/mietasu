import React from 'react';
import { 
  Users, 
  FileText, 
  Database, 
  TrendingUp,
  Clock,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import DemoLayout from '../../components/DemoLayout';

const data = [
  { name: '月', value: 400 },
  { name: '火', value: 300 },
  { name: '水', value: 600 },
  { name: '木', value: 800 },
  { name: '金', value: 500 },
  { name: '土', value: 200 },
  { name: '日', value: 100 },
];

const activityData = [
  { name: '1週', value: 10 },
  { name: '2週', value: 25 },
  { name: '3週', value: 45 },
  { name: '4週', value: 30 },
  { name: '5週', value: 60 },
];

const Dashboard: React.FC = () => {
  return (
    <DemoLayout title="ダッシュボード">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: '総ナレッジ数', value: '1,248', icon: <Database className="text-blue-600" />, trend: '+12%' },
            { label: '今月の議事録', value: '86', icon: <FileText className="text-green-600" />, trend: '+5%' },
            { label: 'アクティブユーザー', value: '42', icon: <Users className="text-purple-600" />, trend: '+2%' },
            { label: 'AI回答数', value: '3,892', icon: <TrendingUp className="text-orange-600" />, trend: '+18%' },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {stat.icon}
                </div>
                <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.trend} <ArrowUpRight size={12} className="ml-1" />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800">ナレッジ活用状況</h3>
              <select className="text-sm border-gray-200 rounded-lg text-gray-500">
                <option>過去7日間</option>
                <option>過去30日間</option>
                <option>過去3ヶ月</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Activity Chart */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800">アクティビティ</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>
            <div className="h-40 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData}>
                  <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {[
                { title: '議事録が追加されました', time: '10分前', user: '田中 太郎' },
                { title: 'プロジェクトAの更新', time: '1時間前', user: '鈴木 一郎' },
                { title: '新規ユーザー登録', time: '3時間前', user: 'システム' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-blue-50 rounded-full">
                    <Clock size={12} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.user} • {item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Files */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">最近のファイル</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">すべて見る</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 font-medium">
                <tr>
                  <th className="px-6 py-3">ファイル名</th>
                  <th className="px-6 py-3">種類</th>
                  <th className="px-6 py-3">サイズ</th>
                  <th className="px-6 py-3">更新日</th>
                  <th className="px-6 py-3">作成者</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: '2024年度事業計画書.pdf', type: 'PDF', size: '2.4 MB', date: '2024/04/01', author: '佐藤 健' },
                  { name: '4月度定例会議事録', type: 'Minutes', size: '15 KB', date: '2024/04/05', author: '田中 太郎' },
                  { name: '製品仕様書_v2.0.docx', type: 'Word', size: '1.8 MB', date: '2024/03/28', author: '鈴木 一郎' },
                  { name: 'Q1売上報告.xlsx', type: 'Excel', size: '450 KB', date: '2024/04/02', author: '高橋 優子' },
                ].map((file, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-2">
                      <FileText size={16} className="text-gray-400" />
                      {file.name}
                    </td>
                    <td className="px-6 py-4 text-gray-500">{file.type}</td>
                    <td className="px-6 py-4 text-gray-500">{file.size}</td>
                    <td className="px-6 py-4 text-gray-500">{file.date}</td>
                    <td className="px-6 py-4 text-gray-500">{file.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
};

export default Dashboard;
