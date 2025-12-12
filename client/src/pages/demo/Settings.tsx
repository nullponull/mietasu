import { useState } from 'react';
import { Users, Shield, Key, Plus, MoreHorizontal, X } from 'lucide-react';
import DemoLayout from '../../components/DemoLayout';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('users');

  const users = [
    { id: 1, name: '山田 太郎', email: 'taro.yamada@example.com', role: '管理者', status: 'active', lastActive: '2分前' },
    { id: 2, name: '鈴木 花子', email: 'hanako.suzuki@example.com', role: '編集者', status: 'active', lastActive: '1時間前' },
    { id: 3, name: '佐藤 次郎', email: 'jiro.sato@example.com', role: '閲覧者', status: 'invited', lastActive: '-' },
    { id: 4, name: '田中 美咲', email: 'misaki.tanaka@example.com', role: '編集者', status: 'active', lastActive: '3時間前' },
    { id: 5, name: '高橋 健一', email: 'kenichi.takahashi@example.com', role: '閲覧者', status: 'inactive', lastActive: '3日前' },
  ];

  return (
    <DemoLayout title="設定・管理">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-6 py-4 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${
                activeTab === 'users'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users size={18} />
              ユーザー管理
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-4 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${
                activeTab === 'security'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Shield size={18} />
              セキュリティ
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={`px-6 py-4 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${
                activeTab === 'api'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Key size={18} />
              API連携
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">ユーザー一覧</h3>
                    <p className="text-sm text-gray-500">プロジェクトメンバーの権限管理を行います</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-medium">
                    <Plus size={16} />
                    ユーザーを招待
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">名前</th>
                        <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">メールアドレス</th>
                        <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">ロール</th>
                        <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">ステータス</th>
                        <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">最終アクティブ</th>
                        <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="font-medium text-gray-900">{user.name}</div>
                          </td>
                          <td className="py-3 px-4 text-gray-600 text-sm">{user.email}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              user.role === '管理者' ? 'bg-purple-100 text-purple-800' :
                              user.role === '編集者' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center gap-1.5 text-sm ${
                              user.status === 'active' ? 'text-green-600' :
                              user.status === 'invited' ? 'text-orange-600' :
                              'text-gray-500'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                user.status === 'active' ? 'bg-green-600' :
                                user.status === 'invited' ? 'bg-orange-600' :
                                'bg-gray-500'
                              }`}></span>
                              {user.status === 'active' ? '有効' :
                               user.status === 'invited' ? '招待中' : '無効'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-500 text-sm">{user.lastActive}</td>
                          <td className="py-3 px-4 text-right">
                            <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
                              <MoreHorizontal size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">認証設定</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">二要素認証 (2FA)</div>
                        <div className="text-sm text-gray-500">全ユーザーに二要素認証を強制します</div>
                      </div>
                      <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-gray-200 cursor-pointer">
                        <span className="absolute left-0 inline-block w-6 h-6 bg-white border border-gray-200 rounded-full shadow transform transition-transform duration-200 ease-in-out translate-x-0"></span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">パスワードポリシー</div>
                        <div className="text-sm text-gray-500">最低12文字以上、記号を含むパスワードを要求</div>
                      </div>
                      <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-blue-600 cursor-pointer">
                        <span className="absolute left-0 inline-block w-6 h-6 bg-white border border-gray-200 rounded-full shadow transform transition-transform duration-200 ease-in-out translate-x-6"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">アクセス制限</h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-gray-900">IPアドレス制限</div>
                        <button className="text-sm text-blue-600 hover:underline">編集</button>
                      </div>
                      <div className="text-sm text-gray-500 mb-3">許可されたIPアドレスからのアクセスのみを許可します</div>
                      <div className="flex gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                          192.168.1.0/24
                          <button className="ml-1.5 text-gray-400 hover:text-gray-600"><X size={12} /></button>
                        </span>
                        <button className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700">
                          <Plus size={12} className="mr-1" /> 追加
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="text-center py-12 text-gray-500">
                <Key size={48} className="mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">API連携設定</h3>
                <p>外部サービスとの連携キーを管理します（管理者のみ）</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DemoLayout>
  );
};

export default Settings;
