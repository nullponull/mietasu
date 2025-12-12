import React from 'react';
import { 
  User, 
  Lock, 
  Shield, 
  Bell, 
  Globe, 
  Database,
  ChevronRight
} from 'lucide-react';
import DemoLayout from '../../components/DemoLayout';

const Settings: React.FC = () => {
  return (
    <DemoLayout title="設定・ユーザー">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Section */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">プロフィール設定</h2>
            <p className="text-sm text-gray-500">アカウント情報と個人の設定を管理します</p>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-white text-2xl font-bold">
                AD
              </div>
              <div>
                <button className="btn btn-outline text-sm mb-2">画像を変更</button>
                <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">名前</label>
                <input type="text" defaultValue="管理者 ユーザー" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                <input type="email" defaultValue="admin@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">役職</label>
                <input type="text" defaultValue="システム管理者" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">部署</label>
                <input type="text" defaultValue="情報システム部" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
            <button className="btn btn-primary">変更を保存</button>
          </div>
        </section>

        {/* General Settings */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">システム設定</h2>
            <p className="text-sm text-gray-500">アプリケーション全体の動作設定</p>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { icon: <Lock size={20} />, title: 'セキュリティ', desc: '2要素認証、パスワードポリシー', status: '有効' },
              { icon: <Shield size={20} />, title: '権限管理', desc: 'ロール設定、アクセス制御', status: '設定済み' },
              { icon: <Bell size={20} />, title: '通知設定', desc: 'メール通知、デスクトップ通知', status: '一部有効' },
              { icon: <Globe size={20} />, title: '言語・地域', desc: '日本語 (日本)、Asia/Tokyo', status: '標準' },
              { icon: <Database size={20} />, title: 'データ連携', desc: '外部ストレージ、API連携', status: '3件連携中' },
            ].map((item, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">{item.status}</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* User Management Preview */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-900">ユーザー管理</h2>
              <p className="text-sm text-gray-500">登録ユーザーの一覧と管理</p>
            </div>
            <button className="btn btn-outline text-sm">ユーザーを追加</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 font-medium">
                <tr>
                  <th className="px-6 py-3">ユーザー名</th>
                  <th className="px-6 py-3">ステータス</th>
                  <th className="px-6 py-3">ロール</th>
                  <th className="px-6 py-3">最終ログイン</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: '管理者 ユーザー', email: 'admin@example.com', role: '管理者', status: 'Active', lastLogin: '1分前' },
                  { name: '田中 太郎', email: 'taro.tanaka@example.com', role: '編集者', status: 'Active', lastLogin: '2時間前' },
                  { name: '鈴木 一郎', email: 'ichiro.suzuki@example.com', role: '閲覧者', status: 'Active', lastLogin: '昨日' },
                  { name: '高橋 優子', email: 'yuko.takahashi@example.com', role: '編集者', status: 'Inactive', lastLogin: '3日前' },
                ].map((user, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.role}</td>
                    <td className="px-6 py-4 text-gray-500">{user.lastLogin}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">編集</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-50 text-center">
            <button className="text-sm text-gray-500 hover:text-gray-700">すべてのユーザーを表示</button>
          </div>
        </section>
      </div>
    </DemoLayout>
  );
};

export default Settings;
